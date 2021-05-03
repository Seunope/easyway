import React, {useEffect, useState} from 'react';
import styles from './style';
import {StatusBar, Keyboard, PermissionsAndroid, Platform} from 'react-native';
import {Text, Container, View, Button, Icon, Spinner} from 'native-base';
import Toast from 'react-native-simple-toast';
import {StackActions} from '@react-navigation/native';
import ArvoButton from '../../../components/Button';
import InputBar from '../../../components/InputBar';
import TitleText from '../../../components/TitleText';
import ErrorText from '../../../components/ErrorText';
import {primaryColors} from '../../../config/colors';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAPBOX_TOKEN} from '../../../../env';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {GEO_DECODING} from '../../../config/api/http';
const accessToken = MAPBOX_TOKEN;
MapboxGL.setAccessToken(accessToken);

export default () => {
  const [currentCoords, setCurrentCoords] = useState([]);
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTimer, setSearchTimer] = useState(false);

  useEffect(() => {
    handlePermission();
    const timeoutId = setTimeout(() => doSearch(), 1000);
    return () => clearTimeout(timeoutId);
  }, [address]);

  const handlePermission = async () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        console.log(data);
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
      })
      .catch(err => {
        console.log(err);

        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });
  };

  const doSearch = async () => {
    // Keyboard.dismiss();
    if (validateFailed(address)) {
      return;
    }
    let data = {address: address};
    console.log(data);
    let responseData = await GEO_DECODING(data);
    console.log('responseData:', responseData);
    // if (responseData.success) {
    //   this.onSuccess(responseData, password, telephone);
    // } else {
    //   this.onError(responseData);
    // }
  };
  const manageInput = text => {
    console.log('someeeee');
  };
  const validateFailed = input => {
    let msg = null;
    setErrorMessage(msg);
    if (!input) {
      msg = 'Whoops! You forgot to supply entires';
      Toast.show(msg, Toast.LONG);
      setErrorMessage(msg);
      return true;
    }
  };

  const onSuccess = async responseData => {
    console.log(responseData);
  };

  const onError = responseData => {
    let msg = null;
    if (responseData.error) {
      msg = responseData.error;
    } else if (responseData.errors) {
      msg = '';
      if (responseData.errors.password) {
        msg = msg + responseData.errors.password;
      } else if (responseData.errors.telephone) {
        msg = msg + responseData.errors.telephone;
      }
    } else {
      msg = 'Something got broken! Try again';
      if (responseData) {
        msg = JSON.stringify(responseData);
      }
    }
    Toast.show(msg, Toast.LONG);
    this.setState({errorMsg: msg});
    return;
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={primaryColors.grayWhite}
      />
      <MapboxGL.UserLocation
        renderMode="normal"
        visible={false}
        onUpdate={location => {
          const coords = [location.coords.longitude, location.coords.latitude];
          setCurrentCoords(coords); // current location is here
        }}
      />

      <View style={styles.container}>
        <TitleText titleTxt="Search!" />

        <InputBar textLabel="Origin" placeholder="Current location" />

        <InputBar
          textLabel="Your destination"
          autoCapitalize="none"
          placeholder="Your destination"
          onChangeText={text => setAddress(text)}
          value={address}
        />

        <ErrorText message="" />
      </View>
    </Container>
  );
};

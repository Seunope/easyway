import React, {useEffect, useState} from 'react';
import styles from './style';
import {StatusBar, FlatList, TouchableOpacity} from 'react-native';
import {Text, Container, View} from 'native-base';
import Toast from 'react-native-simple-toast';
import InputBar from '../../../components/InputBar';
import TitleText from '../../../components/TitleText';
import ErrorText from '../../../components/ErrorText';
import {primaryColors} from '../../../config/colors';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAP_BOX_TOKEN} from '../../../../env';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {FORWARD_GEO_CODING, REVERSE_GEO_CODING} from '../../../config/api/http';
import {Flow} from 'react-native-animated-spinkit';

const accessToken = MAP_BOX_TOKEN;
MapboxGL.setAccessToken(accessToken);

export default props => {
  const [currentCoords, setCurrentCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [myLocation, setMyLocation] = useState('Lagos');
  const [address, setAddress] = useState('Appa Lagos');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [remoteData, setRemoteData] = useState();

  useEffect(() => {
    handlePermission();
    getUserLocation();
    const timeoutId = setTimeout(() => doSearch(), 1000);
    return () => clearTimeout(timeoutId);
  }, [address]);

  const handlePermission = async () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        //console.log(data);
      })
      .catch(err => {
        console.log(err);
        Toast.show('Accept permission to proceed', Toast.LONG);
      });
  };

  const onSuccess = responseData => {
    if (responseData && responseData.features) {
      responseData.features.length !== 0
        ? setRemoteData(responseData.features)
        : setErrorMessage('Address not found. Please edit entires');
    }
    return;
  };

  const doSearch = async () => {
    setErrorMessage('');
    const data = {address: address};
    const responseData = await FORWARD_GEO_CODING(data);
    console.log('responseData:', responseData);

    if (responseData.type) {
      return onSuccess(responseData);
    } else {
      return onError(responseData);
    }
  };

  const getUserLocation = async () => {
    console.log('currentCoords', currentCoords);
    const responseData = await REVERSE_GEO_CODING(currentCoords);

    if (responseData && responseData.features) {
      responseData.features.length
        ? setMyLocation(responseData.features[0].place_name)
        : null;
    } else {
      onError(responseData);
    }
    return;
  };

  const onError = responseData => {
    let msg = '';
    if (responseData.error) {
      msg = responseData.error;
    } else if (responseData.message) {
      msg = responseData.message;
    } else {
      msg = 'Something got broken! Try again';
      if (responseData) {
        msg = JSON.stringify(responseData);
      }
    }
    Toast.show(msg, Toast.LONG);
    setErrorMessage(msg);
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
          const coords = {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          };
          //console.log('coords', coords);
          setCurrentCoords(coords); // current location is here
          getUserLocation();
        }}
      />

      <View style={styles.container}>
        <TitleText titleTxt="Search!" />

        <InputBar
          textLabel="Origin"
          placeholder="Current location"
          value={myLocation}
        />

        <InputBar
          textLabel="Your destination"
          autoCapitalize="none"
          placeholder="Your destination"
          onChangeText={text => setAddress(text)}
          value={address}
        />
        <ErrorText message={errorMessage} />

        {loading ? (
          <View style={styles.loadingModal}>
            <Flow size={60} color={primaryColors.orangeDark} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={remoteData}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                  props.navigation.navigate('DashboardStack', {
                    screen: 'MapView',
                    params: {
                      longitude: item.center[0],
                      latitude: item.center[1],
                      userCoordsLongitude: currentCoords.longitude,
                      userCoordsLatitude: currentCoords.latitude,
                    },
                  })
                }>
                <Text style={styles.textSmall}>{item.place_name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </Container>
  );
};

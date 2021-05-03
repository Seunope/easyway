import React from 'react';
import {Container, Text, View} from 'native-base';
import DynamicButton from '../components/DynamicButton';
import SuccessArt from '../assets/others/success_art';
import {StackActions} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {verticalScale} from '../config/scaling';

export default (props) => {
  const goDashboard = () => {
    // let resetAction = StackActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({routeName: 'HomeScreen'})],
    // });
    // props.navigation.dispatch(resetAction);
  };

  return (
    <Container style={styles.container}>
      <View style={{flex: 4}}>
        <Text style={styles.header}>Successful</Text>
        <Text style={styles.subHeader}>{props.route.params.message}</Text>
        <View style={{alignItems: 'center'}}>
          <SuccessArt />
        </View>
      </View>

      <View style={styles.containerButton}>
        <DynamicButton
          text="Go to home"
          action={goDashboard}
          loading={false}
          fieldStatus={true}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: primaryColors.white,
    padding: 20,
    justifyContent: 'center',
  },

  header: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 60,
    marginBottom: 7,
    fontWeight: 'bold',
    color: primaryColors.black,
  },
  subHeader: {
    textAlign: 'center',
    padding: 20,
    color: primaryColors.black,
  },
  containerButton: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  optionImage: {
    height: verticalScale(260),
    resizeMode: 'contain',
  },
});

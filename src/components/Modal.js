import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CircleFade} from 'react-native-animated-spinkit';
import {primaryColors} from '../config/colors';
import {H3} from 'native-base';

export default (props) => (
  <View style={styles.main}>
    <H3 style={styles.txtLabel}>
      {props.message ? props.message : 'Sorting out some stuff. Wait for it!'}
    </H3>
    <CircleFade size={60} color={primaryColors.white} />
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  txtLabel: {
    color: primaryColors.white,
    textAlign: 'center',
    marginBottom: 40,
  },
});

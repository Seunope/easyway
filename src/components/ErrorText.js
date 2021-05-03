import React from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {Text} from 'native-base';
import  {moderateScale} from '../config/scaling';

export default (props) => {
  return <Text style={styles.main}>{props.message}</Text>;
};

const styles = StyleSheet.create({
  main: {
    color: primaryColors.red,
    fontSize: moderateScale(11),
  },
});

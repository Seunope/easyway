import React from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {Button, Text} from 'native-base';

export default (props) => {
  return (
    <Button style={styles.btn} onPress={props.onPress}>
      <Text> {props.btnTxt} </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: primaryColors.darkGray,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
});

import React, {Component} from 'react';
import {Button, Spinner, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';

export default (props) => {
  return (
    <View style={styles.main}>
      {props.loading ? (
        <Spinner color={primaryColors.orangeDark} />
      ) : props.fieldStatus ? (
        <Button style={styles.btn} onPress={props.onPress}>
          <Text style={styles.btnText} uppercase={false}>
            {props.btnTxt}
          </Text>
        </Button>
      ) : (
        <Button style={styles.btn2}>
          <Text style={styles.btnText} uppercase={false}>
            {props.btnTxt}
          </Text>
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn2: {
    backgroundColor: primaryColors.gray,
    borderRadius: 10,
    padding: 5,
  },
  btn: {
    backgroundColor: primaryColors.black,
    borderRadius: 10,
    padding: 5,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '85%',
    borderRadius: 4,
    marginTop: 30,
    marginBottom: 30,
  },
  btnText: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
});

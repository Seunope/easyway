import React from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {View, Button, Text} from 'native-base';

export default (props) => {
  return (
    <View style={styles.main}>
      <Button style={styles.btn} onPress={props.onPress}>
        <Text style={styles.btnText} uppercase={false}>
          {props.btnTxt}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: primaryColors.blueLight,
    borderRadius: 10,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '85%',
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 40,
  },
  btnText: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
});

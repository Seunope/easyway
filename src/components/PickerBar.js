import React from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {Icon, View, Text, Form, Picker} from 'native-base';
// import {Picker} from '@react-native-picker/picker';
import  {moderateScale, scale} from '../config/scaling';

export default (props) => {
  return (
    <View>
      <Text style={styles.txtLabel}>{props.textLabel}</Text>

      <Form style={styles.main}>
        <Picker
          mode={props.mode}
          iosHeader={props.iosHeader}
          iosIcon={<Icon name="arrow-down" />}
          style={styles.picker}
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}>
          <Picker.Item label={props.label} value={props.value} />
          {props.pickerData}
        </Picker>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColors.white,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: primaryColors.gray,
  },
  picker: {
    height: 50,
    width: scale (300),
  },
  txtLabel: {
    fontSize: moderateScale(10),
    color: primaryColors.black,
    textAlign: 'left',
    marginLeft: 5,
  },
});

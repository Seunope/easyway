import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {Text, Input, View, Item, Icon} from 'native-base';
import {moderateScale} from '../config/scaling';

export default (props) => {

  return (
    <View style={styles.main}>
      <Text style={styles.txtLabel}>{props.textLabel}</Text>
      <Item regular style={styles.txtInput}>
        <Input
          style={styles.inputText}
          returnKeyType={props.returnKeyType}
          margin={props.margin}
          disabled={props.disabled}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          marginHorizontal={props.marginHorizontal}
          maxLength={props.maxLength}
          placeholderTextColor={
            props.placeholderTextColor
              ? props.placeholderTextColor
              : primaryColors.gray
          }
          secureTextEntry={null}
          value={props.value}
        />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  txtInput: {
    backgroundColor: primaryColors.white,
    borderRadius: 35,
    borderColor: primaryColors.lightGray,
    justifyContent: 'flex-start',
    margin: 10,
  },
  txtLabel: {
    fontSize: moderateScale(10),
    color: primaryColors.black,
  },
});

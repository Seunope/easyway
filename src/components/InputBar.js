import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {Input, View, Item, Icon} from 'native-base';
import {moderateScale} from '../config/scaling';

export default (props) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const doShowPassword = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <View style={styles.main}>
      <Item regular style={styles.txtInput}>
        <Input
          style={[
            styles.inputText,
            props.emailError
              ? {backgroundColor: primaryColors.yellowLighter2}
              : {backgroundColor: primaryColors.lighterGray},
          ]}
          returnKeyType={props.returnKeyType}
          margin={props.margin}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          marginHorizontal={props.marginHorizontal}
          maxLength={props.maxLength}
          secureTextEntry={props.buttonEye ? !passwordShow : null}
          value={props.value}
        />
        {props.buttonEye ? (
          <Icon
            name={passwordShow ? 'ios-eye-outline' : 'ios-eye-off-outline'}
            onPress={doShowPassword}
          />
        ) : null}
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  txtInput: {
    marginBottom: 10,
    backgroundColor: primaryColors.lighterGray,
    borderRadius: 5,
    borderColor: primaryColors.white,
    padding: 2,
  },
  txtLabel: {
    fontSize: moderateScale(10),
    color: primaryColors.black,
  },
});

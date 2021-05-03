import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {moderateScale} from '../config/scaling';
import {primaryFont} from '../config/fonts';

export default props => {
  return (
    <View>
      <Text style={styles.title}>{props.titleTxt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    fontSize: moderateScale(35),
    marginTop: 10,
    marginBottom: 10,
    fontFamily: primaryFont.muliExtraBold,
    color: primaryColors.black,
  },
});

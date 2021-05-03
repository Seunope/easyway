import React from 'react';
import {Container, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {primaryColors} from '../config/colors';
import {moderateScale} from '../config/scaling';
import { primaryFont} from '../config/fonts'

export default (props) => {
  return (
    <Container>
<View>
      <Text style={styles.title}>{props.titleTxt}</Text>
    </View>
    </Container>
    
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    fontSize: moderateScale(35),
    marginTop: 20,
    marginBottom: 20,
    fontFamily: primaryFont.muliExtraBold,
    color: primaryColors.black,
  },
});

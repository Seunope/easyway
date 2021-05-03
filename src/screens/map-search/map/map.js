import React, {Component} from 'react';
import styles from './style';
import {StatusBar, Keyboard} from 'react-native';
import {Text, Container, View, Button, Icon, Spinner} from 'native-base';
import Toast from 'react-native-simple-toast';
import {StackActions} from '@react-navigation/native';
import ArvoButton from '../../../components/Button';
import InputBar from '../../../components/InputBar';
import TitleText from '../../../components/TitleText';
import ErrorText from '../../../components/ErrorText';
import {connect} from 'react-redux';
import {primaryColors} from '../../../config/colors';

export default () => {
  const doSubmit = async () => {
    Keyboard.dismiss();
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={primaryColors.grayWhite}
      />
      <View style={styles.container}>
        <TitleText titleTxt="Search!" />
      </View>
    </Container>
  );
};

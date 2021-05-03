import React from 'react';
import {StatusBar, Image} from 'react-native';
import {View, Text, H1, Container, Button} from 'native-base';
import styles from './style';
import {primaryColors} from '../../config/colors';
import Toast from 'react-native-simple-toast';
import TitleText from '../../components/TitleText';

export default () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={primaryColors.grayWhite}
      />
      <View style={styles.container}>
        <Text style={styles.logo}>EasyWay</Text>
        <Text>Going some place? Find and Go!</Text>
      </View>
      <View  style={styles.containerPower}>
        <Text note>Powered By <Text style={styles.varens}>Varens</Text></Text>
      </View>
    </Container>
  );
};

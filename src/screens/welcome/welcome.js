import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Container} from 'native-base';
import styles from './style';
import {primaryColors} from '../../config/colors';
import {Wave} from 'react-native-animated-spinkit';

export default props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      props.navigation.reset({
        index: 0,
        routes: [{name: 'DashboardStack'}],
      });
    }, 5000);
  }, []);

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
      <View style={styles.containerLoading}>
        {loading ? <Wave size={60} color={primaryColors.orangeDark} /> : null}
      </View>
      <View style={styles.containerPower}>
        <Text note>
          Powered By <Text style={styles.varens}>Varens</Text>
        </Text>
      </View>
    </Container>
  );
};

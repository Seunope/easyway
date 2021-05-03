import React from 'react';
import {StatusBar, Image} from 'react-native';
import {View, Text, H1, Container, Button} from 'native-base';
import styles from './style';
import {primaryColors} from '../../config/colors';
import Toast from 'react-native-simple-toast';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //showRealApp: false,
    };
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.containerText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text} note>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <Button small style={styles.navButtonNext}>
        <Text>Next</Text>
      </Button>
    );
  };
  _renderDoneButton = () => {
    return (
      <Button
        small
        style={styles.navButtonDone}
        onPress={() => {
            this.props.navigation.navigate('AuthStackScreen');
        }}>
        <Text>Start</Text>
      </Button>
    );
  };

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={primaryColors.grayWhite}
        />
        <Text>I dey here</Text>
      </Container>
    );
  }
}

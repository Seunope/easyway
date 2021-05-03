import {StyleSheet} from 'react-native';
import {primaryColors} from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: primaryColors.white,
    padding: 20,
  },
  linkText: {
    marginTop: 5,
    padding: 10,
    color: primaryColors.navyBlue,
    textDecorationLine: 'underline',
  },
  subTitle: {
    margin: 5,
    //color: primaryColors.blue,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 11,
  },
  buttonRed: {
    backgroundColor: primaryColors.red,
    marginTop: 20,
    paddingLeft: 90,
    paddingRight: 90,
    marginBottom: 15,
    borderRadius: 10,
  },
});

import {StyleSheet} from 'react-native';
import {primaryColors} from '../../../config/colors';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
  locationPointer: {
    height: 20,
    width: 20,
    backgroundColor: primaryColors.blue,
    borderRadius: 40,
    borderColor: primaryColors.white,
    borderWidth: 3,
  }, 
});

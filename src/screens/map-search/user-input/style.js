import {StyleSheet} from 'react-native';
import {primaryColors} from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
    padding: 20,
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: primaryColors.orange,
    paddingLeft: 10,
    marginTop: 7,
    marginBottom: 7,
  },

  loadingModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

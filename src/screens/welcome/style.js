import {StyleSheet} from 'react-native';
import {primaryColors} from '../../config/colors';
import {primaryFont} from '../../config/fonts';
import {moderateScale} from '../../config/scaling';

export default StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: primaryColors.white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPower: {
    //flex: 1,
    backgroundColor: primaryColors.white,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLoading: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: primaryColors.white,
  },

  logo: {
    fontSize: moderateScale(40),
    marginBottom: 10,
    fontFamily: primaryFont.muliExtraBold,
    color: primaryColors.black,
  },
  slogan: {
    marginBottom: 40,
  },

  varens: {
    color: primaryColors.orange,
    fontFamily: primaryFont.muliBold,
  },
});

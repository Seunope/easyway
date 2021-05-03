import {StyleSheet} from 'react-native';
import {primaryColors} from '../../config/colors';
import {moderateScale} from '../../config/scaling';

export default StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
  slide: {
    flex: 1,
    //backgroundColor: 'red'
  },
  title: {
    marginTop: 10,
    padding: 20,
    paddingBottom: 10,
    fontSize: moderateScale(25),
    fontFamily: 'Muli-ExtraBold',
  },
  text: {
    fontSize: moderateScale(18),
    padding: 15,
    paddingTop: 0,
  },
  containerText: {
    flex: 1,
    backgroundColor: primaryColors.grayWhite,
    //justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  activeDotStyle: {
    backgroundColor: primaryColors.black,
    padding: 10,
    borderRadius: 10,
  },
  dotStyle: {
    backgroundColor: primaryColors.orange,
  },
  navButtonNext: {
    backgroundColor: primaryColors.black,
    borderRadius: 7,
  },
  navButtonDone: {
    backgroundColor: primaryColors.orangeDark,
    borderRadius: 7,
  },
  navButtonSkip: {
    backgroundColor: primaryColors.blue,
    borderRadius: 7,
  },
});

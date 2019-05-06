import EStyleSheet from 'react-native-extended-stylesheet';
import { Metrics, Colors } from '../../Themes';

export default EStyleSheet.create({
  row: {
    marginTop: 10,
    width: Metrics.screenWidth * 0.96,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.listGridBorder,
    backgroundColor: Colors.listGridBack,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  titleTxt: {
    color: Colors.black,
    marginHorizontal: 5
  },
  bodyTxt: {
    color: Colors.listSubTitle,
    marginHorizontal: 5
  }
});

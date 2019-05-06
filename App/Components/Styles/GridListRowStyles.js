import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Metrics } from '../../Themes';

export default EStyleSheet.create({
  image: {
    width: Metrics.screenWidth * 0.3,
    height: Metrics.screenWidth * 0.3,
    justifyContent: 'flex-end',
    marginLeft: Metrics.screenWidth * 0.023,
    marginTop: Metrics.screenWidth * 0.023
  },
  labelContainer: {
    backgroundColor: Colors.windowTint,
    height: 25,
    justifyContent: 'center'
  },
  label: {
    color: Colors.snow,
    marginHorizontal: 5
  }
});

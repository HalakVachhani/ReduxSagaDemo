import { Metrics, Colors } from '../../Themes';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  logo: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: 10
  },
  infoMessage: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  },
  ellipsis: {
    color: Colors.black,
    fontSize: 80,
    marginTop: 30
  },
  loadingBg: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  statusbar: {
    height: 64,
    width: Metrics.screenWidth,
    backgroundColor: Colors.black,
    alignItems:'center',
    flexDirection:'row',
    paddingTop: 10
  },
  statusBarTitle: {           
    color: Colors.snow,
    fontSize: 18,
    textAlign: 'center',
    flex: 2
  },
  statusBarRightTitle: { 
    flex: 0.5
  },
  statusBarLeftTitle: { 
    color: Colors.snow,
    fontSize: 15
  },
  statusBarLeftTitleBg: { 
    flex: 0.5,
    paddingLeft: 10
  },
  backArrow: {
    marginTop: 3
  }
});


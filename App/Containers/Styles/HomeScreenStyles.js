import EStyleSheet from 'react-native-extended-stylesheet';
import { Metrics, Colors } from '../../Themes';

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
    color: Colors.clear,
    fontSize: 100,
    alignSelf: 'center'
  },
  gridCocktails: {
    flexDirection: 'row',
    flexWrap:'wrap'
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
  statusBarTitle:{           
    color: Colors.snow,
    fontSize: 18,
    textAlign: 'center',
    flex: 2
  },
  statusBarRightTitle: { 
    color: Colors.snow,
    fontSize: 15
  },
  statusBarRightTitleBg: {
    flex: 0.5
  },
  statusBarLeftTitle: { 
    flex: 0.5
  }
});

import { createStackNavigator, createAppContainer } from 'react-navigation';
// import LaunchScreen from '../Containers/LaunchScreen';
import HomeScreen from '../Containers/HomeScreen';
import PostScreen from '../Containers/PostScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  // LaunchScreen: { screen: LaunchScreen },
  HomeScreen: { screen: HomeScreen },
  PostScreen: { screen: PostScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav);

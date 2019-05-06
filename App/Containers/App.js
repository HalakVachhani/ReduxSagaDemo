import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../Config';
import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';
import createStore from '../Redux';
import SplashScreen from 'react-native-splash-screen';

// create our store
const store = createStore();
const entireScreenWidth = Dimensions.get('window').width;
// Use the width of the design you have been provided in place of 380
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    if(Platform.OS == 'ios') {
      SplashScreen.hide();
    }
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App;

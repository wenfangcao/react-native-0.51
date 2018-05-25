import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeComponent from './src/component/Home.js'
import MineComponent from './src/component/Mine.js'
import NavComponent from './src/Nav.js'
const RootNavigator = StackNavigator ({
  Nav: { screen: NavComponent },
  Home: { screen: HomeComponent },
  Mine: { screen: MineComponent },
});
AppRegistry.registerComponent('reactRNApp', () => RootNavigator);

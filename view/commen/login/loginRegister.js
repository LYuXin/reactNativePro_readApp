import React from 'react';
import { View, Button ,Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login'
import Register from './register'
import WelcomeScreen from './WelcomeScreen'
import MainPage from './mainpage'
const RootStack = createStackNavigator(
  {
    Login:Login,
    Register:Register,
    WelcomeScreen:WelcomeScreen,
    MainPage:MainPage
  },
  {
    headerMode: 'none',
    initialRouteName:'WelcomeScreen'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class LoginRegister extends React.Component {
  render() {
    return <AppContainer />;
  }
}

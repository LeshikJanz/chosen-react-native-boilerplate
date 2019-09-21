// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from 'app/modules/Login';
import Home from 'app/modules/Home';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null, gesturesEnabled: false }
    },
    Home: {
      screen: Home,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(RNApp);

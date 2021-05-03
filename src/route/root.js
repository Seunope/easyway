import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardStack from './dashboard';
import Welcome from '../screens/welcome/welcome';

const RootStack = createStackNavigator();
const RootStackScreen = () => {

  return (
    <RootStack.Navigator headerMode="none" mode="modal">
      <RootStack.Screen name="Welcome" component={Welcome} />
      <RootStack.Screen name="DashboardStack" component={DashboardStack} />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

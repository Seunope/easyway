import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/welcome/welcome';


const DashboardStack = createStackNavigator();
export default () => (
  <DashboardStack.Navigator
    //headerMode="none"
    drawerType="slide"
    initialRouteName="Welcome">
    <DashboardStack.Screen name="Welcome" component={Welcome} />
</DashboardStack.Navigator>
);

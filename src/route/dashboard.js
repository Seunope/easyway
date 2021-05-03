import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserInput from '../screens/map-search/user-input/user_input';
import MapView from '../screens/map-search/map/map';


const DashboardStack = createStackNavigator();
export default () => (
  <DashboardStack.Navigator
    headerMode="none"
    drawerType="slide"
    initialRouteName="UserInput">
    <DashboardStack.Screen name="UserInput" component={UserInput} />
    <DashboardStack.Screen name="MapView" component={MapView} />

  </DashboardStack.Navigator>
);

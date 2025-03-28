import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home} from '../screens';
import routes from '../constants/routes';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.Login} component={Login} />
    </Stack.Navigator>
  );
}

export default MainNavigator;

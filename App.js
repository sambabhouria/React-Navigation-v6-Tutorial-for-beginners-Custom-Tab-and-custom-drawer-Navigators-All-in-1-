import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

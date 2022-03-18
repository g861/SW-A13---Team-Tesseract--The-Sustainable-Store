import React from 'react';
import { StyleSheet,Dimensions, Text, View, LogBox } from 'react-native';
import Header from './partials/Header';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message'
//Redux 
import { Provider } from 'react-redux';
import store from './Redux/store';

// Importing the navigation 

import Main from './Navigators/Main';

// Context API

import Auth from './Context/store/Auth';

var {width} = Dimensions.get('window')
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Auth>
    <Provider store={store}>
      <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
    </Auth>
  );
}

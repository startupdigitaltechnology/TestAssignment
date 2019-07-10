/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';


import {StyleSheet} from 'react-native';
import Dashboard from './src/views/Dashboard';
import DetailView from './src/views/DetailView';
import {createStackNavigator, createAppContainer} from 'react-navigation';



const LoginNavigator = createStackNavigator({
   Dashboard:{screen:Dashboard},
  DetailView:{screen:DetailView},
},{
  initialRouteName: 'Dashboard',
  gesturesEnabled: false,
  headerMode: 'none',
}
);

 const RootNavigator = createAppContainer(LoginNavigator)

const store = createStore(rootReducer, applyMiddleware(thunk));



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

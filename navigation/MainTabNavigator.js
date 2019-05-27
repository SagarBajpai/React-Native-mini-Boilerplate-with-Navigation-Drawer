import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HamburgerIcon from './HamburgerIcon';


const HomeStack = createStackNavigator({
  First: { 
    screen: HomeScreen, 
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});

const LinksStack = createStackNavigator({
  First: { 
    screen: LinksScreen, 
    navigationOptions: ({ navigation }) => ({
      title: 'Links',
      headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});

const SettingsStack = createStackNavigator({
  First: { 
    screen: SettingsScreen, 
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});

export default MyDrawerNavigator = createDrawerNavigator({
  Home: { 
    screen: HomeStack
  },
  Links: { 
    screen: LinksStack
  },
  Settings: { 
    screen: SettingsStack
  }
});


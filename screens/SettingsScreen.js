import React from 'react';
import {View, Text} from 'react-native';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}

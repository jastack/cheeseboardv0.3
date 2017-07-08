import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Alerts extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Made it to the alerts page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#959860',
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

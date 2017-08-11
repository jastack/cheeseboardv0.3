import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class CustomAlert extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
    this.updateAlertState = this.updateAlertState.bind(this);
  }

  updateAlertState(text){
    this.setState({text: text});
    this.props.updateAlertState(text);
  }


  render(){
    return(
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            clearButtonMode="while-editing"
            placeholder="Custom Alert"
            keyboardAppearance="dark"
            value={this.props.text}
            onChangeText={(text) => this.updateAlertState(text)}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#e6e6e6',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    height: 30,
    width: 200,
    borderRadius: 15,
  }
});

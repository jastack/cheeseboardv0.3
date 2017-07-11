import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textAlign: 'center'
    };
  }

  setTextAlign(){

  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            clearButtonMode="while-editing"
            placeholder="Search Cheeseboard"
            keyboardAppearance="dark"
            onFocus={this.setTextAlign}
            value={this.state.text}
            onChangeText={(text) => this.props.pizzaArray(text)}
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
    marginTop: 20,
    height: 30,
    width: 200,
    borderRadius: 15,
  }
});

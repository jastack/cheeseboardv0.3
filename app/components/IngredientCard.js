import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';


export default class Ingredient extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ""};
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }

  addAlert(){
    this.props.addAlert(this.props.type);
  }

  removeAlert(){
    this.props.removeAlert(this.props.type);
  }

  displayAlert(){
    if (this.props.alert === 'add alert'){
      return(
        <TouchableOpacity
          style={styles.addAlert}
          onPress={this.addAlert}>
          <Text style={styles.button}>Add Alert</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.margin}>
          <TouchableOpacity
            style={styles.removeAlert}
            onPress={this.removeAlert}>
            <Text style={styles.button}>Remove Alert</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }



  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.ingredient}>{this.props.type}</Text>
          <View style={styles.border}>
            {this.displayAlert()}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  addAlert: {
    width: 68,
    borderRadius: 15,
    alignItems: 'center'
  },
  removeAlert: {
    borderRadius: 15,
    alignItems: 'center'
  },
  border: {
    backgroundColor: '#959860',
    justifyContent: 'center',
    marginRight: 30,
  },
  button: {
    padding: 2,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  ingredient: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 150
  }
});

import React from 'react';
import CustomAlert from './CustomAlert';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';


export default class AlertBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {alert: ""};
    this.addAlert = this.addAlert.bind(this);
    this.updateAlertState = this.updateAlertState.bind(this);
  }

  addAlert(){
    this.props.addAlert(this.state.alert);
    this.setState({alert: ""});
  }

  updateAlertState(alert){
    this.setState({alert: alert});
  }

  displayAlert(){
    return(
      <TouchableOpacity
        style={styles.addAlert}
        onPress={this.addAlert}>
        <Text style={styles.button}>Add Alert</Text>
      </TouchableOpacity>
    );
  }



  render(){
    return(
      <View style={styles.card}>
        <CustomAlert updateAlertState={this.updateAlertState} text={this.state.alert}/>
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

import React from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
 } from 'react-native';


export default class Alert extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ""};
    this.removeAlert = this.removeAlert.bind(this);
  }

  removeAlert(alert){
    this.props.removeAlert(this.props.alert);
  }


  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.alert}>{this.props.alert}</Text>
        <TouchableOpacity
          style={styles.removeAlert}
          onPress={this.removeAlert}>
          <Text style={styles.button}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },

  alert: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 150,
  },
  removeAlert: {
    width: 90,
    borderRadius: 15,
    alignItems: 'center'
  },
  button: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  }
});

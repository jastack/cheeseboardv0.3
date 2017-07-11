import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Alert from '../components/AlertCard';

export default class Alerts extends React.Component {
  constructor(props){
    super(props);
    this.removeAlert = this.removeAlert.bind(this);
  }

  displayAlerts(){
    if (this.props.alerts.size < 1){
      return (
        <View style={styles.message}>
          <Text style={styles.alertHeader}>
            Search for ingredients
          </Text>
          <Text style={styles.alertHeader}>
            to add alerts!
          </Text>
        </View>
      );
    } else {
      const set = this.props.alerts;
      const alertsArray = Array.from(set);
      return (
        alertsArray.map(
          alert => <Alert key={alert}
                          alert={alert}
                          removeAlert={this.removeAlert} />
        )
      );
    }
  }

  removeAlert(alert){
    this.props.removeAlert(alert);
  }



  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Alerts</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.alerts}>
            {this.displayAlerts()}
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  scroll: {
    width: '100%'
  },
  message: {
    marginTop: 10,
  },
  headerText: {
    marginTop: 35,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  alertHeader: {
    textAlign: 'center',
    color: '#808080'
  },
  header: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#959860',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  }
});

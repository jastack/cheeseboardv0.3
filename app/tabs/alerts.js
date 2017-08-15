import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AppState
} from 'react-native';
import Alert from '../components/AlertCard';
import PushController from '../components/PushController';
import BackgroundController from '../components/BackgroundController';
import AlertBar from '../components/AlertBar';
import PushNotification from 'react-native-push-notification';


export default class Alerts extends React.Component {
  constructor(props){
    super(props);

    this.removeAlert = this.removeAlert.bind(this);
    this.addAlert = this.addAlert.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount(){
  //   console.log(this.props.alerts);
  //   // this.setState({alerts: this.props.alerts});
  //   // AppState.addEventListener('change', this.handleChange);
  // }
  //
  // componentWillUnmount(){
  //   console.log("Alerts page unmounted!");
  //   // this.setState({alerts: this.props.alerts});
  //   // AppState.removeEventListener('change', this.handleChange);
  // }


  // handleChange(appState){
  //   if (appState === 'background'){
  //     const date = this.getDate();
  //     const address = 'https://cheeseboardapi.herokuapp.com/api/week/' + date;
  //     fetch(address)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const currentDate = new Date(Date.now());
  //       const mins = 30;
  //       const hours = 13;
  //       currentDate.setMinutes(mins);
  //       currentDate.setHours(hours);
  //       const pizza = responseData[0].pizza_type;
  //       this.alertLogic(pizza.toLowerCase(), currentDate);
  //     });
  //   }
  // }
  //
  // alertLogic(pizza, date){
  //   const set = this.props.alerts;
  //   const alertsArray = Array.from(set);
  //   for (var i = 0; i < alertsArray.length; i++) {
  //     if (pizza.includes(alertsArray[i].toLowerCase())) {
  //       PushNotification.localNotificationSchedule({
  //         message: pizza,
  //         date: date,
  //         number: 0
  //       });
  //       i = alertsArray.length;
  //     }
  //   }
  // }

  // getDate(){
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();
  //   return year + "-" + month + "-" + day;
  // }

  displayAlerts(){
    if (this.props.alerts.size < 1){
      return (
        <View style={styles.message}>
          <Text style={styles.alertHeader}>
            Search for ingredients
          </Text>
          <Text style={styles.alertHeader}>
            to add alerts, or add
          </Text>
          <Text style={styles.alertHeader}>
            your own custom ones!
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

  addAlert(alert){
    this.props.addAlert(alert);
  }



  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Alerts</Text>
        </View>
        <ScrollView style={styles.scroll}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.alerts}>
            <AlertBar addAlert={this.addAlert}/>
            {this.displayAlerts()}
          </View>
        </ScrollView>
        <BackgroundController alerts={this.props.alerts} />
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
    marginTop: 0,
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

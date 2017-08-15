import React, { Component } from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import { View } from 'react-native';

const getDate = function(){
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return year + "-" + month + "-" + day;
};
//
// const alertLogic = function(pizza, date, set){
//   const alertsArray = Array.from(set);
//   const message = "From the background, today's pizza is: " + pizza;
//   for (var i = 0; i < alertsArray.length; i++) {
//     if (pizza.includes(alertsArray[i].toLowerCase())) {
//       PushNotification.localNotificationSchedule({
//         message: message,
//         date: date,
//         number: 0
//       });
//       i = alertsArray.length;
//     }
//   }
// };

var alerts = [];
var date = '';

export default class BackgroundController extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillUnmount(){
  //   const set = this.props.alerts;
  //   alerts = Array.from(set);
  // }

  componentWillReceiveProps(){
    const set = this.props.alerts;
    alerts = Array.from(set);
  }

  componentDidMount(){
    const set = this.props.alerts;
    alerts = Array.from(set);

    BackgroundFetch.configure({
      stopOnTerminate: false
    }, function(){

      date = getDate();

      const address = 'https://cheeseboardapi.herokuapp.com/api/today/' + date;

      fetch(address)
        .then((response) => response.json())
        .then((responseData) => {
          var pizza = '';
          if (responseData.length < 1){
            PushNotification.localNotification({
              message: "No good pizza today",
              number: 0
            });
          } else {
            pizza = responseData[0].pizza_type;
            const pizzaCheck = pizza.toLowerCase();
            for (var i = 0; i < alerts.length; i++) {
              if (pizzaCheck.includes(alerts[i].toLowerCase())){
                console.log("Time to get pizza!");
                PushNotification.localNotification({
                  message: pizza,
                  number: 0
                });

                i = alerts.length;
              } 
            }
          }

        })
        .catch(function(error){
          console.log(error);
        });

      BackgroundFetch.finish();
    }, function(error){
      console.log('[js] RNBackgroundFetch failed to start');
    });
  }

  // backgroundTask(){
  //   const alerts = this.props.alerts;
  //   const date = getDate();
  //   const address = 'https://cheeseboardapi.herokuapp.com/api/week/' + date;
  //   fetch(address)
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     const currentDate = new Date(Date.now());
  //     const mins = 0;
  //     const hours = 15;
  //     currentDate.setMinutes(mins);
  //     currentDate.setHours(hours);
  //     const pizza = responseData[0].pizza_type;
  //     const story = "From the fetch background, pizza today is " + pizza;
  //     alertLogic(pizza.toLowerCase(), currentDate, alerts);
  //   });
  //
  //
  //
  //
  //
  //
  //   BackgroundFetch.finish();
  // }

  // <PushController />

  render(){
    return (
      <View>
      </View>
    );
  }
}

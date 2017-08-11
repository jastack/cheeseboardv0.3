import React, { Component } from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import { View } from 'react-native';

// const getDate = function(){
//   const date = new Date();
//   const year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   return year + "-" + month + "-" + day;
// };
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

export default class BackgroundController extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    BackgroundFetch.configure({
      stopOnTerminate: false
    }, function(){
      const address = 'https://cheeseboardapi.herokuapp.com/api/week/2017-8-11';
      fetch(address)
        .then((response) => response.json())
        .then((responseData) => {
          const pizza = responseData[0].pizza_type;
          PushNotification.localNotification({
            message: pizza,
            number: 0
          });
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


  render(){
    return (
      <View>
        <PushController />
      </View>
    );
  }
}

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Pizza extends React.Component {
  constructor(props){
    super(props);
  }

  dateConverter(dateStr){
    const date = new Date(dateStr);
    date.setMinutes(500);
    const convertedDate = date.toDateString();
    const dateArr = convertedDate.split(" ");
    let day = dateArr[2];
    if (day[0] === "0"){
      day = day[1];
    }
    return dateArr[0] + " " + dateArr[1] + " " +  day;

  }

  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.date}>{this.dateConverter(this.props.date)}</Text>
        <Text style={styles.pizza}>{this.props.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  date: {
    marginTop: 10,
    marginLeft: 30,
    fontWeight: 'bold'
  },

  pizza: {
    flex: 0,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20
  }
});

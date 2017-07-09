import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Ingredient extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.ingredient}>{this.props.type}</Text>
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

  ingredient: {
    flex: 0,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10
  }
});

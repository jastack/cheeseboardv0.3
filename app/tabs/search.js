import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native';
import Pizza from '../components/PizzaCard';
import SearchBar from '../components/SearchBar';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "",
      text: "",
      backgroundColor: "#e6e6e6",
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: 'center',
      search: false};
    this.pizzaArray = this.pizzaArray.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
  }

  pizzaArray(text){
    this.setState({text: text});
    this.searchPizza(text);
  }

  searchPizza(text){
    const string = '%20' + text.replace(" ", "%20");
    console.log(string);
    const address = 'https://cheeseboardapi.herokuapp.com/api/pizza/' + string;
    fetch(address)
     .then(response => response.json())
     .then(responsedata => {
       console.log(responsedata);
      this.setState({pizza: responsedata});
    });
  }

  displayPizza(){
    if (this.state.pizza === "" || this.state.text === ""){
      return (<Text>Pizza...</Text>);
    } else {
      return (this.state.pizza.map(
        pizza => <Pizza key={pizza.id} type={pizza.pizza_type} date = {pizza.date} />
      ));
    }
  }

  changeEdit(e){
    e.preventDefault();
    this.setState({marginLeft: 10, marginRight: 50, textAlign: 'left', search: true});

  }

  cancel(){
    this.setState({marginLeft: '20%', marginRight: '20%', textAlign: 'center',
       text: "",
       search: false});
  }

  displayCancel(){
    if (this.state.search){
      return(
        <View>
          <Cancel return={this.cancel.bind(this)} />
        </View>
      );
    } else {
      return(
        <View>

        </View>
      );
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#959860"
          barStyle='light-content'
          animated={true}
          />
        <View style={styles.search}>
          <SearchBar pizzaArray={this.pizzaArray}/>
        {this.displayCancel()}
        </View>
        <ScrollView>
          {this.displayPizza()}
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  input: {
    height: 30,
    width: '60%',
    marginTop: 27,
    borderRadius: 15,
    paddingLeft: 10,
  },
  search: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#959860',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

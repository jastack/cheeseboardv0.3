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
import Ingredient from '../components/IngredientCard';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "",
      ingredients: "",
      text: "",
      backgroundColor: "#e6e6e6",
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: 'center',
      search: false};
    this.pizzaArray = this.pizzaArray.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }



  pizzaArray(text){
    this.setState({text: text});
    this.searchIngredients(text);
    this.searchPizza(text);
  }

  searchPizza(text){
    const string = '%20' + text.replace(" ", "%20");
    const address = 'https://cheeseboardapi.herokuapp.com/api/pizza/' + string;
    fetch(address)
     .then(response => response.json())
     .then(responsedata => {
      this.setState({pizza: responsedata});
    });
  }

  searchIngredients(text){
    const string = '%20' + text.replace(" ", "%20");
    const address = 'https://cheeseboardapi.herokuapp.com/api/ingredients/' + string;
    fetch(address)
     .then(response => response.json())
     .then(responsedata => {
      this.setState({ingredients: responsedata});
    });
  }

  displayPizza(){
    if (this.state.pizza === "" || this.state.text === ""){
      return (
        <View>
        </View>
      );
    } else {
      return (this.state.pizza.map(
        pizza => <Pizza key={pizza.id} type={pizza.pizza_type} date = {pizza.date} />
      ));
    }
  }

  alertControl(alert){
    if (this.props.alerts.has(alert)){
      return "remove alert";
    } else {
      return "add alert";
    }
  }

  displayIngredients(){
    if (this.state.pizza === "" || this.state.text === ""){
      return (
        <View style={styles.message}>
          <Text style={styles.searchHeader}>Try searching for ingredients </Text>
          <Text style={styles.searchHeader}>and pizzas...</Text>
        </View>
      );
    } else {
      const fourIngredients = this.state.ingredients.slice(0, 4);
      return (fourIngredients.map(
        ingr => <Ingredient key={ingr.id}
        type={ingr.name}
        addAlert={this.addAlert}
        alert={this.alertControl(ingr.name)}
        removeAlert={this.removeAlert} />
      ));
    }
  }

  addAlert(alert){
    this.props.addAlert(alert);
  }

  removeAlert(alert){
    this.props.removeAlert(alert);
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
        </View>
        <ScrollView style={styles.scroll}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.ingredients}>
            {this.displayIngredients()}
          </View>
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
  ingredients: {
    marginBottom: 20
  },
  message: {
    marginTop: 10,
  },
  searchHeader: {
    textAlign: 'center',
    color: '#808080'
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
    backgroundColor: '#e6e6e6',
  },
  scroll: {
    width: '100%',
    marginBottom: 50
  }
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
  StatusBar
} from 'react-native';
import Pizza from '../components/PizzaCard';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {pizza: "", refreshing: false};
    this.displayPizza = this.displayPizza.bind(this);
    this.getPizza = this.getPizza.bind(this);
  }

  componentDidMount(){
    this.getPizza();
  }

  _onRefresh(){
    this.setState({refreshing: true});
    this.getPizza();
  }

  getPizza(){
    const date = this.getDate();
    const address = 'https://cheeseboardapi.herokuapp.com/api/week/' + date;
    fetch(address)
    .then((response) => response.json())
    .then((responsedata) => {
      this.setState({pizza: responsedata, refreshing: false});
    });
  }

  getDate(){
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return year + "-" + month + "-" + day;
  }



  displayPizza(){
    if (this.state.pizza === ""){
      return (<Text>Still loading...</Text>);
    } else {
      return (this.state.pizza.map(
        pizza => <Pizza key={pizza.id} type={pizza.pizza_type} date = {pizza.date} />
      ));
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
        <View style={styles.header}>

          <Image style={styles.image} source={require('../assets/homepage.png')} />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              title="Refresh pizza"
              titleColor='#e6e6e6'
              tintColor='#e6e6e6'
              />
          }
          >
          {this.displayPizza()}
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
    backgroundColor: '#fff',
  },
  header: {
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#959860',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },
  image: {
    flex: 1,
    width: '100%',
    height: 300,
    margin: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  htext: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

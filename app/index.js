import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} from 'react-native';
import Home from './tabs/home';
import Search from './tabs/search';
import Alerts from './tabs/alerts';
import Icon from 'react-native-vector-icons/Ionicons';


export default class App extends Component {
  constructor(props){
    super(props);
    const initialAlert = new Set();
    this.state = {
      selectedTabButton: 'home',
      alerts: initialAlert
    };
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }

  addAlert(alert){
    const alerts = this.state.alerts.add(alert);
    this.setState({alerts: alerts});
  }

  removeAlert(alert){
    const alerts = this.state.alerts;
    alerts.delete(alert);
    this.setState({alters: alerts});
  }



  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTabButton}>

        <Icon.TabBarItem
          iconName="ios-home-outline"
          selectedIconName='ios-home'
          onPress={() => this.setState({selectedTabButton: 'home'})}
          selected={this.state.selectedTabButton === 'home'}
          >
          <Home selectedTab={this.state.selectedTabButton} />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          iconName="ios-search-outline"
          selectedIconName='ios-search'
          onPress={() => this.setState({selectedTabButton: 'search'})}
          selected={this.state.selectedTabButton === 'search'}
          >
          <Search addAlert={this.addAlert}
            removeAlert={this.removeAlert}
            alerts={this.state.alerts} />

        </Icon.TabBarItem>

        <Icon.TabBarItem
          iconName='ios-notifications-outline'
          selectedIconName='ios-notifications'
          onPress={() => this.setState({selectedTabButton: 'alerts'})}
          selected={this.state.selectedTabButton === 'alerts'}
          >
          <Alerts alerts={this.state.alerts}
            addAlert={this.addAlert}
            removeAlert={this.removeAlert} />
        </Icon.TabBarItem>


      </TabBarIOS>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Container, Header, Content, Button, Form, Input, Item, Icon } from 'native-base';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';






type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'white'
  };
  constructor(props) {
      super(props);
      this.state = {
        titleText: "Included Items",
        bodyText: 'Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant',

        packageid: '',
        name: '',
        price: '',
        items: '',
      }
  };
  onLocationChange = (packageid) => {
    this.setState({ packageid: packageid });
}





  render() {

    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

          <View style={styles.buttonContainer}>
            <Button bordered dark style={styles.dateButton}
            onPress={() => this.props.navigation.navigate('SecondPage',
            {
              packageid: 1,
              name: "College Edition",
              price: 20,
              items: "Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant"
            })}>
            <Input
              value={this.state.packageid, this.state.price, this.state.name, this.state.items}
              onChangeText={this.onLocationChange}
              />




              <Text>Package 1 - $20 - College Edition</Text>
            </Button>

            <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                      {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                      {this.state.bodyText}
                    </Text>
                  </Text>



          <Image source ={require('./assets/basket.png')} style = {styles.image}/>

            <Button bordered dark style={styles.dateButton}
            onPress={() => this.props.navigation.navigate('SecondPage',
            {
              packageid: 2,
              name: "On Your Own",
              price: 30,
              items: "Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant",
            }
            )}>
              <Text>Package 2 - $30 - On Your Own</Text>
            </Button>

            <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                      {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                      {this.state.bodyText}
                    </Text>
                  </Text>




          <Image source ={require('./assets/basket.png')} style = {styles.image}/>

            <Button bordered dark style={styles.dateButton}
            onPress={() => this.props.navigation.navigate('SecondPage',
            {
              packageid: 3,
              name: "Shared Space",
              price: 40,
              items: "Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant",
            }
            )}>
              <Text>Package 3 - $40 - Shared Space</Text>
            </Button>

            <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                      {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                      {this.state.bodyText}
                    </Text>
                  </Text>



          <Image source ={require('./assets/basket.png')} style = {styles.image}/>

            <Button bordered dark style={styles.dateButton}
            onPress={() => this.props.navigation.navigate('SecondPage',
            {
              packageid: 4,
              name: "Shared Space",
              price: 50,
              items: "Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant",
            }
            )}>
              <Text>Package 4 - $50 - Small Family</Text>
            </Button>

            <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={this.onPressTitle}>
                      {this.state.titleText}{'\n'}{'\n'}
                    </Text>
                    <Text numberOfLines={5}>
                      {this.state.bodyText}
                    </Text>
                  </Text>


          <Image source ={require('./assets/basket.png')} style = {styles.image}/>

          </View>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column'
  },
  content: {
    marginLeft: '5%'
  },
  dateButton: {
    //padding: 115,
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    width: '95%'

  },
  image: {
    //flex: 1,
    width: 200,
    height: 215,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    marginLeft: 80
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

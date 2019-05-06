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

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Confirmation Page',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'white'


  };
  constructor(props) {
      super(props);
      this.state = {
        titleText: "Confirming Your Order",
        titleText1: "Included Items:",
        bodyText: 'Thank you for your order. Please check your email for order confirmation',
      };
    }

  render() {
    const packageid = this.props.navigation.state.params.packageid;
    const price = this.props.navigation.state.params.price;
    const name = this.props.navigation.state.params.name;
    const items = this.props.navigation.state.params.items;
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>


        <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                  {this.state.titleText}{'\n'}{'\n'}
                  </Text>
        </Text>

        <Text style={styles.titleText} onPress={this.onPressTitle}>

              <Text numberOfLines={1}>
              Package {packageid} - ${price} - {name}
              {'\n'}
              </Text>
            </Text>

        <Text style={styles.descText}>
                <Text style={styles.center} onPress={this.onPressTitle}>
                  {this.state.titleText1}{'\n'}
                </Text>
                <Text style={styles.center} numberOfLines={1}>
                  {items}{'\n'}
                </Text>
              </Text>

        <Image source ={require('./assets/basket.png')} style = {styles.image}/>

        <Text style={styles.baseText}>
                <Text numberOfLines={5}>
                  {this.state.bodyText}
                </Text>
        </Text>

         </Content>
       </Container>
    );
  }
}

const styles = StyleSheet.create({

  content: {
    marginLeft: '5%',
    //marginRight: '5%',
    marginTop:'5%'
  },
  center: {
    textAlign: 'center',
  },
  baseText: {

    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  spacing: {

    marginBottom: '5%',

  },
  spacing2: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {

    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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


});

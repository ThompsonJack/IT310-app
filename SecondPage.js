/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Container, Header, Content, Button, Form, Input, Item, Icon } from 'native-base';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import stripe from 'tipsi-stripe';

stripe.setOptions({
  publishableKey: 'pk_test_K5pZcjk0TdV5FndXD4DVt7wA00mvCaBVGx',
  androidPayMode: 'test',
});

type Props = {};
export default class Second extends Component<Props> {
  static navigationOptions = {
    title: 'Shipping Information',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'white'
  };
  pay = () => {
      const self = this;
      stripe.paymentRequestWithNativePay({
          total_price: 'stacks$$$$$$$$$$$$$$$$$0.00',
          currency_code: 'USD',
          shipping_address_required: true,
          phone_number_required: true,
          shipping_countries: ['US', 'CA'],
          line_items: [{
            currency_code: 'USD',
            description: 'Testing',
            total_price: '0.05',
            unit_price: '0.05',
            quantity: '1',
          }],
        }).then((response) => self.SubmittoDatabase());
    }

  SubmittoDatabase = () => {
    const ref = firebase.firestore().collection('orders');
    const self = this;

    ref.add({ //change the input box names that describe whats beuing wrote
      InputBox1: this.state.InputBox1,
      InputBox2: this.state.InputBox2,
      InputBox3: this.state.InputBox3,
      InputBox4: this.state.InputBox4,
      InputBox5: this.state.InputBox5,
      InputBox6: this.state.InputBox6
      //packageid: this.state.packageid,
      })
      .then(() => {
        this.props.navigation.navigate('Confirmation',{packageid: self.packageid, items: self.items, name: self.name, price: self.price});
      });
    };


  constructor(props) {
      super(props);
      this.state = {
        titleText: "Included Items:",
        bodyText: 'Tide pods, toilet paper, hand soap, paper towels, 2 dove bars of soap, toothpaste, deodorant',
        titleShipping: "Shipping Information",
        FullName: "Full Name",
        StreetText: 'Street Address 1',
        StreetText2: 'Street Address 2',
        City: "City",
        State: "State",
        Zip: "ZIP",
        Country:"Country/Region",
        PhoneNumber: "Phone Number",
        ConfirmationButton: "Submit Order",
        InfoText:"Package 2 - $30 - On Your Own",

        InputBox1: '',
        InputBox2: '',
        InputBox3: '',
        InputBox4: '',
        InputBox5: '',
        InputBox6: '',
      };
  }
  render() {

    this.packageid = this.props.navigation.state.params.packageid;
    this.price = this.props.navigation.state.params.price;
    this.name = this.props.navigation.state.params.name;
    this.items = this.props.navigation.state.params.items;

    const InputBox1 = this.props.navigation.state.params.InputBox1;
    const InputBox2 = this.props.navigation.state.params.InputBox2;
    const InputBox3 = this.props.navigation.state.params.InputBox3;
    const InputBox4 = this.props.navigation.state.params.InputBox4;
    const InputBox5 = this.props.navigation.state.params.InputBox5;
    const InputBox6 = this.props.navigation.state.params.InputBox6;

    console.log(this.props.navigation)


    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

        <Text style={styles.InfoText} onPress={this.onPressTitle}>
              <Text numberOfLines={1}>
              Package {this.packageid} - ${this.price} - {this.name}
              </Text>
            </Text>

        <Text style={styles.descText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                  {this.state.titleText}{'\n'}
                </Text>
                <Text numberOfLines={1}>
                  {this.items}{'\n'}
                </Text>
              </Text>






          <Text style={styles.titleShipping} onPress={this.onPressTitle}>
                <Text numberOfLines={1}>
                  {this.state.titleShipping}
                </Text>
              </Text>

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.StreetText}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox1: text})}
            value={this.state.InputBox1}
          />

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.StreetText2}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox2: text})}
            value={this.state.InputBox2}
          />

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.City}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox3: text})}
            value={this.state.InputBox3}
          />

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.State}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox4: text})}
            value={this.state.InputBox4}
          />

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.Zip}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox5: text})}
            value={this.state.InputBox5}
          />

          <Text style={styles.BaseText}>
                <Text numberOfLines={1}>
                  {this.state.PhoneNumber}
                </Text>
              </Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
              onChangeText={(text) => this.setState({InputBox6: text})}
            value={this.state.InputBox6}
          />

          <View style={styles.buttonContainer}>
            <Button bordered dark style={styles.dateButton}
            onPress={() =>{
                      this.pay()
                    }}>
              <Text numerOfLines={1}>
                {this.state.ConfirmationButton}
              </Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  content: {
    marginLeft: '5%'
  },
  dateButton: {
    padding: 15,
    marginLeft: '50%',
    marginTop: 30,
    marginRight:19,
    marginBottom: 20,
    textAlign: "center"
  },
  BaseText: {
    marginTop: 20,
    fontFamily: 'Cochin',
    textAlign: 'left',
    color:'#424242',
    fontWeight: 'bold',
    marginBottom: 5

  },
  titleShipping: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#353535'
    //marginBottom: 40
  },
  InputBox: {

  },image: {
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
  descText: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    color:'#424242'
  },
InfoText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#353535'
  },
});

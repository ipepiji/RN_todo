import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, Button, Alert, Platform, 
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, 
  ScrollView, FlatList, SectionList, ActivityIndicator } from 'react-native';
import styles from './style';

// class Test extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={styles.container}>
//         <Text>Hello World!</Text>
//         <Image source={pic} style={{width: 193, height: 110}}/>
//       </View>
//     )
//   }
// }

class Logo extends Component {
  render() {
    let pic = require('../../../img/logo.png')
    return (
      <Image source={pic} style={{width: 193, height: 193}}/>
    )
  }
}

// class Greeting extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// class Blink extends Component {

//   componentDidMount(){
//   // Toggle the state every second
//       setInterval(() => (
//         this.setState(previousState => (
//           { isShowingText: !previousState.isShowingText }
//         ))
//       ), 1000);
//    }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

export default class HomeScreen extends Component {
  
  // initial declaration 
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }

  // initial declaration same as constructor
  // state = {
  //   isLoading: true,
  //   wallet_balance: 0
  // }

  // componentDidMount(){
  //   fetch('https://urwallet.okwave.global/api/v1/wallet/btc/getWalletBalance?wallet_name=fizzzy59', {
  //     method: 'GET',
  //     headers: {
  //     'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoZWF0IiwiaWF0IjoxNTYwODI0NjA5LCJleHAiOjMuNjAwMDAwMDAwMDAwMDE2ZSsyM30.SS25ft3uri6CaCFXIMmb7nyRZHzsLzDXXh4JfdF5BxA',
  //     'Content-Type': 'application/json',
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     this.setState({
  //       isLoading: false,
  //       wallet_balance: result.data.wallet_balance,
  //     });
  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });
  // }

  // teke() {
  //   Alert.alert('Gapo dio?')
  // }

  // teke_lamo() {
  //   Alert.alert('Gapo dio...............?')
  // }

  render() {

    // const { isLoading, wallet_balance } = this.state;

    // if(isLoading){
    //   return(
    //     <View style={styles.container}>
    //       <ActivityIndicator/>
    //       <Text>Retrieve data....</Text>
    //     </View>
    //   )
    // }

    return (
      // <ScrollView>
      <View style={styles.container}>
        
        {/* <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' /> */}

        {/* <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' /> */}

        {/* <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text> */}

        {/* <Button
          onPress={this.teke}
          title="Press Me"
        /> */}
        
        {/* <TouchableHighlight onPress={this.teke} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.teke}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this.teke}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this.teke}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this.teke} onLongPress={this.teke_lamo} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight> */}

        {/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}

        {/* <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> */}

        {/* <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        /> */}

        {/* <Text> wallet balance : {wallet_balance} btc </Text> */}

        <Logo/>
        <Text style={{ fontSize: 20, padding: 12, fontWeight: 'bold' }}>URwallet</Text>

        <TouchableOpacity style={[styles.btn,{backgroundColor: 'green'}]} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{backgroundColor: 'blue'}]} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      
      </View>
  
      // </ScrollView> 
    );
  }
}

// AppRegistry.registerComponent('TestProject', () => Homescreen);

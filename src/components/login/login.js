import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity,
     TextInput, KeyboardAvoidingView,
     Animated, Keyboard, Easing  } from 'react-native';
import styles from './style';
import logo from '../../../img/logo.png';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.imageHeight = new Animated.Value(193);
        this.imageWidth = new Animated.Value(193);
      }

    componentDidMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
      }
    
    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    
    keyboardDidShow = () => {
        Animated.timing(this.imageHeight, {
            duration: 500,
            toValue: 103,
            easing: Easing.elastic(2)
        }).start();
        Animated.timing(this.imageWidth, {
            duration: 500,
            toValue: 103,
            easing: Easing.elastic(2)
        }).start();
    };
    
    keyboardDidHide = () => {
        Animated.timing(this.imageHeight, {
            duration: 500,
            toValue: 193,
            easing: Easing.elastic(2)
        }).start();
        Animated.timing(this.imageWidth, {
            duration: 500,
            toValue: 193,
            easing: Easing.elastic(2)
        }).start();
    };
      
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='always'>
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
                        
                    <Animated.Image source={logo} style={{ height: this.imageHeight, width: this.imageWidth }} />
                    <Text style={{ fontSize: 20, padding: 12, fontWeight: 'bold' }}>URwallet</Text>

                    <TextInput style = {styles.input}
                    placeholder = "Username"
                    onChangeText = {this.handleUsername}/>
                
                    <TextInput style = {styles.input}
                    placeholder = "Password"
                    onChangeText = {this.handlePassword}
                    secureTextEntry= {true}/>

                    <Text style={{ alignSelf: 'flex-end', fontSize: 15, paddingRight: 20, paddingTop: 14, paddingBottom: 10, fontWeight: 'bold', color: 'blue', textDecorationLine: 'underline' }} onPress={()=> this.props.navigation.navigate('Forget')}>Forget Password?</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => alert("TAC code has been sent")}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}
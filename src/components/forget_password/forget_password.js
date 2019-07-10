import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity,
     TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './style';


export default class ForgetScreen extends Component {
      
    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
                
                    <Text style={{ fontSize: 16, padding: 12, alignSelf: 'flex-start', paddingLeft: 20 }}>Please enter your email below:</Text>

                    <TextInput style = {styles.input}
                    placeholder = "Email"
                    onChangeText = {this.handleEmail}/>

                    <TouchableOpacity style={styles.btn} onPress={() => alert("TAC code has been sent")}>
                        <Text style={styles.btnText}>Reset Password</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}
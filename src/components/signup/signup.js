import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity,
     TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import t from 'tcomb-form-native'

export default class SignUpScreen extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            phone: null,
            password: null,
            confirmPassword: null
        }
    }

    handleSubmit = async () => {
    
        if(this.state.confirmPassword == this.state.password){
            fetch('https://05343f4d.ngrok.io/api/v1/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password
                })
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(JSON.stringify(result))
            })
            .catch((error) =>{
                console.error(error);
            });
        }
        else
            alert("Confirm password not same!")

    }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>

                    <TextInput style = {styles.input}
                    placeholder = "Username"
                    onChangeText = {(username) => this.setState({username})}
                    value={this.state.username}/>

                    <TextInput style = {styles.input}
                    placeholder = "Email"
                    onChangeText = {(email) => this.setState({email})}
                    value={this.state.email}/>

                    <TextInput style = {styles.input}
                    placeholder = "Phone Number"
                    onChangeText = {(phone) => this.setState({phone})}
                    value={this.state.phone}/>

                    <TextInput style = {styles.input}
                    placeholder = "Password"
                    onChangeText = {(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry= {true}/>
                    
                    <TextInput style = {styles.input}
                    placeholder = "Confirm Password"
                    onChangeText = {(confirmPassword) => this.setState({confirmPassword})}
                    value={this.state.confirmPassword}
                    secureTextEntry= {true}/>


                    <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit() }>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

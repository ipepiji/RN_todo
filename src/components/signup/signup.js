import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity,
     TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './style';

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async () => {
        if(this.confirmPassword == this.password){
            console.log(this.username)
            fetch('https://05343f4d.ngrok.io/api/v1/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.email,
                    phone: this.phone,
                    password: this.password
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

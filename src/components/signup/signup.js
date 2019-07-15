import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity,
     TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import formStyles from './form_style';
import t from 'tcomb-form-native'

const Form = t.form.Form;

export default class SignUpScreen extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
            // username: null,
            // email: null,
            // phone: null,
            // password: null,
            // confirmPassword: null
        };

        this.Username = t.refinement(t.String, (s) => {
            if(s.length >= 6 && s.length <= 15)
                return s;
        });

        this.Email = t.refinement(t.String, email => {
            const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return reg.test(email);
        });

        this.Password = t.refinement(t.String, (s) => {
            if(s.length >= 6 && s.length <= 15)
                return s;
        });
        
        this.ConfirmPassword = t.refinement(t.String, (s) => {
            if(!this.state.user.password)
                this.refs.form.getComponent('password').refs.input.focus();
            else{
                if(s == this.state.user.password)
                    return s;
            }
        });
        
        this.user = t.struct({
            username: this.Username,
            email: this.Email,
            phone: t.Number,
            password: this.Password,
            confirmPassword: this.ConfirmPassword
        });
        
        this.options = {
            auto: 'placeholders',
            fields: {
                username: {
                    help: '*(Length) Min: 6, Max: 15, "Unique" and used in login'
                    },
                email: {
                    help: '*Eg: xxxx@xxx.com'
                },
                phone: {
                    help: '*Valid phone number'
                },
                password: {
                    password: true,
                    secureTextEntry: true,
                    help: '*(Length) Min: 6, Max: 15 and used in login'
                },
                confirmPassword: {
                    password: true,
                    secureTextEntry: true,
                    help: '*Same as password above'
                }
            },
            stylesheet: formStyles,
        };

        this.validate = null;
    };

    onChange(user) {
        this.setState({ user });

        if(user.username)
            this.refs.form.getComponent('username').validate()
        if(user.email)
            this.refs.form.getComponent('email').validate()
        // if(user.phone)
        //     this.refs.form.getComponent('phone').validate()
        if(user.password)
            this.refs.form.getComponent('password').validate()
        if(user.confirmPassword)
            this.refs.form.getComponent('confirmPassword').validate()

        if(user.username && user.email && user.phone && user.password && user.confirmPassword) {
            this.validate = this.refs.form.getValue();
        }
    }

    handleSubmit(){
        if(this.validate){
            fetch('https://e951b942.ngrok.io/api/v1/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.user.username,
                    email: this.state.user.email,
                    phone: this.state.user.phone,
                    password: this.state.user.password
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
            this.refs.form.getValue();
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='always'>
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>

                    {/* <TextInput style = {styles.input}
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
                    secureTextEntry= {true}/> */}

                    <Form
                        ref="form"
                        type={this.user}
                        value={this.state.user}
                        onChange={(user) => this.onChange(user)}
                        options={this.options}
                    />

                    <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit()}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

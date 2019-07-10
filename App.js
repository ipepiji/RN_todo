import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/home/home'
import LoginScreen from './src/components/login/login'
import SignUpScreen from './src/components/signup/signup'
import ForgetScreen from './src/components/forget_password/forget_password'

const MainNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: 'red',
          fontWeight: 'bold'
        }
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        title: 'Sign Up',
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: 'red',
          fontWeight: 'bold'
        }
      }
    },
    Forget: {
      screen: ForgetScreen,
      navigationOptions: {
        title: 'Forget Password',
        headerTintColor : 'white',
        headerStyle: {
          backgroundColor: 'red',
          fontWeight: 'bold'
        }
      }
    }
  });

  export default createAppContainer(MainNavigator);
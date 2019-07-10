import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
    },
    btn: {
        backgroundColor: 'blue',
        borderColor: 'white',
        width: "90%",
        margin: 40,
        borderRadius: 10,
        padding: 12,
    },
    btnText: {
        padding: 5,
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        margin: 4,
        width: "90%",
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 12
     }
});

export default styles;
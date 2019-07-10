import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 19
    },
    btn: {
        backgroundColor: 'green',
        borderColor: 'white',
        width: "90%",
        margin: 30,
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
        margin: 10,
        width: "90%",
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 12
     }
});

export default styles;
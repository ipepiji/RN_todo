import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      paddingTop: 30
    },
    btn: {
        backgroundColor: 'blue',
        borderColor: 'white',
        width: "75%",
        margin: 14,
        borderRadius: 10,
        padding: 15
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
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff000',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn: {
      borderColor: 'white',
      width: "90%",
      margin: 12,
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
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    }
});

export default styles;
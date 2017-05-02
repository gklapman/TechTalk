import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create ({
   container: {
      marginTop: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      borderWidth: 1,
      height: 50,
      width: 150,
      borderColor: 'black',
      backgroundColor: 'lightsteelblue'
   },
   question: {
      margin: 20, 
      padding: 15,
      textAlign: 'center',
      backgroundColor: 'midnightblue',
      fontSize: 20,
      borderWidth: 4, 
      color: 'white'
   },
   title: {
      fontSize: 30,
      margin: 30,
      textAlign: 'center',
      color: 'white',
      padding: 15,
      borderWidth: 2,
      borderColor: 'white'
   },
   buttonText: {
      textAlign: 'center',
      marginTop: 15,
      
   },
   learnMore: {
      textAlign: 'center',
      color: 'white'
   },
   homeButton: {
      marginBottom: 15,
      borderWidth: 1,
      height: 50,
      width: 150,
      borderColor: 'black'
   },
   overallbackground: {
      backgroundColor: 'slategrey'
   },
   sceneContainer: {
      flex: 1,
      alignItems: 'center',
   },
   content: {
      alignItems: 'center'
   },
   info: {
      fontSize: 20,
      color: 'white',
      padding: 8,

   },
   react: {
      alignItems: 'flex-start',
      color: '#7fffd4',
      fontSize: 20

   },
   native: {
      alignItems: 'flex-end',
      color: '#8fbc8f',
      marginBottom: 15,
      fontSize: 20,
   },
   compContainer: {
      flex: 1,
      flexDirection: 'column'
   },
   import: {
      fontSize: 15,
      margin: 15,
      color: 'white'
   },
   smallInfo: {
      fontSize: 15,
      color: 'white',
      padding: 8,
   }
  
 
})

export default Styles
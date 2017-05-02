import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

export default HomeButton = (props) => {
   return (
      <View style = {Styles.container}>
         <TouchableOpacity
            style = {Styles.homeButton}
            onPress = {props.goToHome}>
            <Text style={Styles.buttonText}>
               Go To Home
            </Text>
         </TouchableOpacity>
      </View>
   )
}



// const styles = StyleSheet.create ({
//    container: {
//       marginTop: 100,
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
//    button: {
//       borderWidth: 1,
//       padding: 10,
//       borderColor: 'black'
//    }
// })

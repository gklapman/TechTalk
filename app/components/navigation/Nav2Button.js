import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const Nav2Button = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.homeButton}
         onPress={props.goToNav2}>
            <Text style={Styles.buttonText}>
               Next
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default Nav2Button
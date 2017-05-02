import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const AnimationsButton = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.button}
         onPress={props.goToAnimations}>
            <Text style={Styles.buttonText}>
               Touch Events
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default AnimationsButton
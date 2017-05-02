import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const NavigationButton = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.button}
         onPress={props.goToNavigation}>
            <Text style={Styles.buttonText}>
               Navigation
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default NavigationButton
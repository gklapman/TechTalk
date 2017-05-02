import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const StylingButton = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.button}
         onPress={props.goToStyling}>
            <Text style={Styles.buttonText}>
               Styling
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default StylingButton
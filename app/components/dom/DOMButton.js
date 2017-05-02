import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const DOMButton = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.button}
         onPress={props.goToDOM}>
            <Text style={Styles.buttonText}>
               DOM Elements
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default DOMButton
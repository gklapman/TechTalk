import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import Styles from '../../../Style.js'

const DevToolsButton = (props) => {
   return (
      <View style={Styles.container}>
         <TouchableOpacity
         style={Styles.button}
         onPress={props.goToDevTools}>
            <Text style={Styles.buttonText}>
               DevTools
            </Text>
         </TouchableOpacity>
      </View>
   )
}


export default DevToolsButton
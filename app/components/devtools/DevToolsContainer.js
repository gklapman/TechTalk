import React, { Component } from 'react'
import {
   View,
   Text
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'

export default class DevToolsContainer extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style = {Styles.sceneContainer}>
            <Text style={Styles.title}>Dev Tools</Text>
            <Text style={Styles.content}>Click ⌘D to learn more!</Text>
            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }

    goToHome = () => {
      this.props.navigator.pop();
   }
}
import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableHighlight,
   ListView
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'

export default class DOMContainer extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style = {Styles.sceneContainer}>
            <Text style={Styles.title}>DOM Elements</Text>
            <Text style={Styles.info}>React --> DOM Elements</Text>
            <Text style={Styles.info}>React Native --> Components </Text>
            <Text style={Styles.import}>**Must import all Components you want to use from React Native</Text>
            <View style={Styles.compContainer}>
            <Text style={Styles.react}>div</Text>
            <Text style={Styles.native}>View</Text>
            <Text style={Styles.react}>span/p</Text>
            <Text style={Styles.native}>Text</Text>
            <Text style={Styles.react}>ul/ol</Text>
            <Text style={Styles.native}>ListView/ScrollView</Text>
            </View>
            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }
   
    goToHome = () => {
      this.props.navigator.pop();
   }
}
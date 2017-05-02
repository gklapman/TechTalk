import React, { Component } from 'react'
import {
   View,
   Text,
   Image
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'


export default class NavigationContainer2 extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style={Styles.sceneContainer}>
            <Text style={Styles.title}>Navigation</Text>
            <Text style={Styles.info}>renderScene</Text>
            <Text style={Styles.info}>route and navigator</Text>
            <Image source={require('./renderscene.png')} style={{width: 350, height: 140}}/>
            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }

    goToHome = () => {
      this.props.navigator.push({
         name: 'Home',
         title: 'Home',
      });
   }
}
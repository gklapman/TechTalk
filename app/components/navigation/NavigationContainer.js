import React, { Component } from 'react'
import {
   View,
   Text,
   Image
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'
import Nav2Button from './Nav2Button'

export default class NavigationContainer extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style={Styles.sceneContainer}>
            <Text style={Styles.title}>Navigation</Text>
            <Text style={Styles.info}>The Navigator Component</Text>
            <Text style={Styles.info}>initalRoute</Text>
            <Image source={require('./initialroute.png')} style={{width: 350, height: 100}}/>
            <Nav2Button goToNav2 = {this.goToNav2}/>
            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }

   goToNav2 = () => {
      this.props.navigator.push({
         name: 'Nav2',
         title: 'Nav2'
      })
   }

    goToHome = () => {
      this.props.navigator.pop();
   }
}
import React, { Component } from 'react'
import {
   View,
   Text,
   Image
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'

export default class AnimationsContainer extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style = {Styles.sceneContainer}>
            <Text style={Styles.title}>Touch Events</Text>
            <Text style={Styles.info}>Able to handle touch events like:  </Text>
            <Text style={Styles.info}> Tappable Components (ex. buttons)  </Text>
            <Text style={Styles.smallInfo}> -long presses  </Text>
            <Text style={Styles.info}>Scrolling Lists and Swiping Views </Text>
            <Text style={Styles.info}>Pinch to Zoom</Text>
            <Image source={require('./touch-feature.png')} style={{width: 400, height: 200}}/>

            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }

    goToHome = () => {
      this.props.navigator.pop();
   }
}
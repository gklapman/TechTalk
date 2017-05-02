import React, { Component } from 'react'
import {
   View, 
   Text, 
   StyleSheet,
   Image
} from 'react-native'
import DOMButton from '../dom/DOMButton.js'
import AnimationsButton from '../animations/AnimationsButton'
import DevToolsButton from '../devtools/DevToolsButton'
import StylingButton from '../styling/StylingButton'
import NavigationButton from '../navigation/NavigationButton'


import Styles from '../../../Style.js'


export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <View>
            <Text style={Styles.question}>What are the differences between React and React Native?</Text>
            <Image source={require('./reactvsreactnative.png')} style={{width: 400, height: 200}}/>
            <DOMButton style={Styles.button} goToDOM = {this.goToDOM}/>
            <StylingButton style={Styles.button} goToStyling = {this.goToStyling}/>
            <AnimationsButton style={Styles.button} goToAnimations = {this.goToAnimations}/>
            <DevToolsButton style={Styles.button} goToDevTools = {this.goToDevTools}/>
            <NavigationButton style={Styles.button} goToNavigation = {this.goToNavigation}/>
         </View>
      )
   }
   goToAnimations = () => {
      this.props.navigator.push({
         name: 'Animations',
         title: 'Animations',
      });
   }
   
   goToDOM = () => {
      this.props.navigator.push({
         name: 'DOM',
         title: 'DOM',
      });
   }

   goToDevTools = () => {
      this.props.navigator.push({
         name: 'DevTools',
         title: 'Dev Tools',
      });
   }


   goToNavigation = () => {
      this.props.navigator.push({
         name: 'Navigation',
         title: 'Navigation',
      });
   }

   goToStyling = () => {
      this.props.navigator.push({
         name: 'Styling',
         title: 'Styling',
      });
   }

}

// const styles = StyleSheet.create({
//    question: {
//       margin: 20, 
//       padding: 20,
//       textAlign: 'center',
//       backgroundColor: 'blue',
//       fontSize: 30
//    },
// })
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity, 
   AppRegistry
} from 'react-native'

import DOMContainer from './app/components/dom/DOMContainer'
import HomeContainer from './app/components/home/HomeContainer'
import AnimationsContainer from './app/components/animations/AnimationsContainer'
import DevToolsContainer from './app/components/devtools/DevToolsContainer'
import NavigationContainer from './app/components/navigation/NavigationContainer'
import StylingContainer from './app/components/styling/StylingContainer'
import NavigationContainer2 from './app/components/navigation/NavigationContainer2'

import Styles from './Style'

export default class TechTalk extends Component {
   constructor(){
      super()
   }
   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
            style = {Styles.overallbackground}
         />
      );
   }
   renderScene(route, navigator) {
      if(route.name == 'Home') {
         return (
            <HomeContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'DOM') {
         return (
            <DOMContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
       if(route.name == 'Styling') {
         return (
            <StylingContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
       if(route.name == 'Animations') {
         return (
            <AnimationsContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
       if(route.name == 'DevTools') {
         return (
            <DevToolsContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
       if(route.name == 'Navigation') {
         return (
            <NavigationContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'Nav2') {
         return (
            <NavigationContainer2
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
   }
}

// var NavigationBarRouteMapper = {
//    LeftButton(route, navigator, index, navState) {
//       if(index > 0) {
//          return (
//             <TouchableOpacity
//                onPress = {() => { if (index > 0) { navigator.pop() } }}>
//                <Text style={ styles.leftButton }>
//                   Back
//                </Text>
//             </TouchableOpacity>
//          )
//       }
//       else { return null }
//    },
//    RightButton(route, navigator, index, navState) {
//       if (route.openMenu) return (
//          <TouchableOpacity
//             onPress = { () => route.openMenu() }>
//             <Text style = { styles.rightButton }>
//                { route.rightText || 'Menu' }
//             </Text>
//          </TouchableOpacity>
//       )
//    },
//    Title(route, navigator, index, navState) {
//       return (
//          <Text style = { styles.title }>
//             {route.title}
//          </Text>
//       )
//    }
// };

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },

})

AppRegistry.registerComponent('TechTalk', () => TechTalk);
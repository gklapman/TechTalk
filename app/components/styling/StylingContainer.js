import React, { Component } from 'react'
import {
   View,
   Text,
   Image
} from 'react-native'

import HomeButton from '../home/HomeButton'
import Styles from '../../../Style.js'

export default class StylingContainer extends Component {
   constructor() {
      super()
   }
   render() {

      return (
         <View style = {Styles.sceneContainer}>
            <Text style={Styles.title}>Styling</Text>
            <Text style={Styles.info}>NO .CSS file</Text>
            <Text style={Styles.info}>StyleSheet Component</Text>
            <Text style={Styles.info}>Styling in the StyleSheet use CamelCase</Text>
            <Text style={Styles.info}>Style Prop</Text>
            <Image source={require('./styleexample.png')} style={{width: 300, height: 150, alignItems: 'center', justifyContent: 'center'}}/>
            <HomeButton goToHome= {this.goToHome}/>
         </View>
      )
   }

    goToHome = () => {
      this.props.navigator.pop();
   }
}

// <Text style={Styles.title}>Styling</Text>
//             <Text style={Styles.info}>StyleSheet is a Component you must import</Text>
//             <Text style={Styles.info}>NO .CSS file but you can make a file for styles in .js</Text>
//             <Text style={Styles.info}>Each component has a prop called style which you can pass an object or refence an object on your style.js file</Text>
//             <Text style={Styles.info}>Styling in the StyleSheet use CamelCase</Text>
//             <Text style={Styles.info}>FlexBox is used to align components</Text>
//             <Image source={require('./styleexample.png')} style={{width: 300, height: 150, alignItems: 'center', justifyContent: 'center'}}/>
//             <HomeButton goToHome= {this.goToHome}/>
//          </View>
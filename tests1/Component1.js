import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import Component2 from '../Component2/Component2'

export default class Component1 extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name: "Gabi",
		
		}
	} 

	onPress(){
		console.log('pressed')
	}

	onPress2(){
		console.log('area 2 pressed')
	}

  render(){
    return (
      <View> 
        	<Text style={styles.myText}>{this.props.message}</Text>
        	<Text>{this.state.name}</Text>
       		
       	 	<Component2 />
      </View>

      );
  }


}

const styles = StyleSheet.create({
	myView: {
		backgroundColor: 'blue',
	},
	myText: {
		color: 'red',
	},
	container: {
		flexDirection: 'row',
		height:100
	},
	v1: {
		flex:1,
		backgroundColor: 'orange',
		padding: 10,

	},
	v2: {
		flex:1,
		backgroundColor: 'green',
		padding: 10
	},

	v3: {
		flex:1,
		backgroundColor: 'purple',
		padding: 10,

	},
	v3text: {
		color: 'white'
	}


})

// <View style={styles.container}>
//        			<TouchableHighlight 
//        				style={styles.v1} 
//        				onPress={this.onPress}
//        				underlayColor="blue">
//        				<View >
//        					<Text>View 1</Text> 
//        				</View>
//        			</TouchableHighlight>	
//        			<TouchableOpacity 
//        				onPress={this.onPress2}
//        				style={styles.v2}
//        				>
//        			<View >
//        				<Text>View 2</Text> 
//        			</View>
//        			</TouchableOpacity>
//        			<View style={styles.v3}>
//        				<Text style = {styles.v3text}>View 3</Text> 
//        			</View>
//        	 	</View>

AppRegistry.registerComponent('Component1', () => Component1);
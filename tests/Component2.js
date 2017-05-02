import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';


export default class Component2 extends Component{
	constructor(props) {
		super(props);
		this.state ={
			textValue: 'Helloooo'
		}
	}

	onChangeText(value){
		this.setState({
			textValue: value
		})
	}

  render(){
    return (
      <View>
        <TextInput 
        style={{height: 60, backgroundColor: 'red'}}
        placeholder={this.state.textValue}
        value={this.state.textValue}
        onChangeText ={(value) => this.onChangeText(value)} />
        <Text>{this.state.textValue}</Text>
      </View>

      );
  }


}

AppRegistry.registerComponent('Component2', () => Component2);
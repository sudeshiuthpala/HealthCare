import React,{Component} from 'react';
import { View,Text } from 'react-native';

export default class Home extends Component
{
    render(){
        return(
                <View
                    style={{flex:1,justifyContent:'center',alignItems:'center',padding: 10}}
                >
                   <Text style={{fontSize: 30}}>Home screen</Text> 
                </View>

        );
    }
}
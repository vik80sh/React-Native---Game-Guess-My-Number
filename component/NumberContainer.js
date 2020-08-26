import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import color from './../constant/color';

const NumberContainer =props=>{
    return(
        <View style={style.container}>
            <Text style={style.number}>{props.children}</Text>
        </View>
    ) 
}

const style= StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:color.primary,
        padding:10,
        marginVertical:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:color.primary,
        fontSize:22,
        color:'black',
        
    }
})

export default NumberContainer;
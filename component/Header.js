import React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import color from '../constant/color';


const Header = props=>{
    return <View style={style.header}>
        <Text style={style.headerTitle}>{props.title}</Text>
    </View>
}

export default Header;

const style = StyleSheet.create({
    header:{
        width:"100%",
        height: 90,
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"center"
    },
    headerTitle:{
        fontSize:18,
        color:'black'
    }
})

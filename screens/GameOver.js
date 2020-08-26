import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../component/Card';

const GameOver = props => {
    return (
        <Card style={style.screen}>
            <View style={style.resultContainer}>
                <Text>Yes We Found Your Number</Text>
                <Text> Total retake : {props.guessRound}</Text>
                <Text> You Choosen : {props.userSelected}</Text>
            </View>
            <View style={style.buttonStyle}>
                <Button title="Start Game" onPress={props.startGame}/>
            </View>
        </Card>
    )
}

export default GameOver;

const style = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyle:{
        marginTop:20
    }
})
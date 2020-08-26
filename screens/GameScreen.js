import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return random;
}
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [guessRound, setGuessRound] = useState(0)
    let currentLow = useRef(1);
    let currentHigh = useRef(100);

    useEffect(()=>{
        if(currentGuess === props.userChoice)
            props.onGameOver(guessRound)
    },[currentGuess, props.onGameOver, props.userChoice])

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'higher' && currentGuess > props.userChoice)
            ){
                Alert.alert(
                    'Don\'t Lie',
                    'You know that this is wrong...',
                    [{text:'Sorry', style:'cancel'}]
                    )
                    return ;
            }
            if(direction==='lower')
                currentHigh.current=currentGuess;
            else
                currentLow.current = currentGuess;
            let nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
            setCurrentGuess(nextNumber)
            setGuessRound(guessRound+1)
    }
    return (
        <View style={style.scree}>
            <Text>Oppenent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.buttonContainer}>
                <Button title="Lower" onPress={() => { nextGuessHandler('lower')}} />
                <Button title="Higher" onPress={() => {nextGuessHandler('higher') }} />
            </Card>
        </View>
    )
}

export default GameScreen;

const style = StyleSheet.create({
    scree: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    }
})
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../component/Card';
import Input from './../component/Input';
import NumberContainer from './../component/NumberContainer';
import color from '../constant/color';


const StartGameScreen = props => {
    const [inputNumber, setInputNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const validateNumber = input => {
        setInputNumber(input.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setInputNumber('');
        setConfirmed(false)
    }
    const confirmInputHander = () => {
        const choosenNumber = parseInt(inputNumber);
        if (isNaN(choosenNumber) || choosenNumber > 99 || choosenNumber <= 0) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [{ Text: "Okay", style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        setConfirmed(true);
        setInputNumber('');
        setSelectedNumber(choosenNumber);
    }

    let confirmOutput;
    if (confirmed) {
        confirmOutput = <Card style={style.numberCard}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>
        Keyboard.dismiss()
    }
    return <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={style.screen}>
            <Text style={style.title}>Start New Game</Text>
            <Card style={style.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    style={style.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={validateNumber}
                    value={inputNumber}
                />
                <View style={style.buttonContainer}>
                    <View style={style.button}>
                        <Button title="Reset" onPress={resetInputHandler} color={color.primary} />
                    </View>
                    <View style={style.button}>
                        <Button title="Confirm" onPress={confirmInputHander} color={color.secodary} />
                    </View>
                </View>
            </Card>
            {confirmOutput}
        </View>
    </TouchableWithoutFeedback>
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: "center"
    },
    numberCard: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default StartGameScreen;

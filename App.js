import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userSelected, setUserSelected] = useState();
  const [guessRound, setGuessRound] = useState(0);
 
  const gameOverHandler = numOfRound =>{
    setGuessRound(numOfRound)
    
  }
  const startGamehandler = selectedNumber => {
    setUserSelected(selectedNumber);
    setGuessRound(0)
  }
  const reStartGame=()=>{
    setGuessRound(0);
    setUserSelected(null);
  }
  let content = <StartGameScreen onStartGame = {startGamehandler}/>;
  if (userSelected && guessRound <= 0){
    content = <GameScreen userChoice = {userSelected} onGameOver={gameOverHandler}/>
  }
  else if(guessRound > 0){
    content = <GameOver guessRound={guessRound} userSelected={userSelected} startGame={reStartGame}/>
  }
  
  return (
    <View style={styles.screen}>
      <Header title="Guess a  Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});

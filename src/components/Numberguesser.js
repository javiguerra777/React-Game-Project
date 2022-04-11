import Win from './Win';
import Lose from './Lose';
import Game from './Game';
import {useState, useEffect} from 'react';
import data from '../services/data';
import './styles/numberguesser.css';

//Gives Random answer
const answer = Math.round(Math.random() * (data.length - 1));

const NumberGuesser = () => {
    console.log(`The answer is ${answer}`);
    const numGuesses = 3; //number of guesses allowed
    //guesses left in game
    const [guessesLeft, setGuessesLeft] = useState(numGuesses);
    //these states are used to determine what to show user at end game
    const [gameWon, setGameWon] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    //used useEffect to offset error in code
    useEffect(()=> {
        if(guessesLeft === 0){
            setGameOver(true);
        }
    }, [guessesLeft]);
    //game function
    const playGame = (choice) => {
        if(guessesLeft > 0){
            setGuessesLeft(prev => prev - 1);
            if(choice === answer){
                setGameWon(true);
                setGameOver(true);
            } 
        }

    }
    //used to restart game in endgame screen
    const restart = () => {
        window.location.reload(false);
    }
    if(!gameOver){ return ( //shows the gamestate
        <Game onClick={playGame} guessesLeft={guessesLeft}/>
    )} else if (gameOver && gameWon){ //gamewon state
        return (
        <Win onClick={restart}/>
        );
    }else { //game lost state
        return (
        <Lose onClick={restart}/>
        )
    }
}

export default NumberGuesser;
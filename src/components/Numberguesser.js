import Win from './Win';
import Lose from './Lose';
import Game from './Game';
import {useState, useEffect} from 'react';
import './styles/numberguesser.css';
const answer = Math.round(Math.random() * 9);

const NumberGuesser = () => {
    //console.log(`The answer is ${answer}`);
    const numGuesses = 10;
    const [guessesLeft, setGuessesLeft] = useState(numGuesses);
    const [gameWon, setGameWon] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    useEffect(()=> {
        if(guessesLeft === 0){
            setGameOver(true);
        }
    }, [guessesLeft])
    const game = (choice) => {
        if(guessesLeft > 0){
            setGuessesLeft(prev => prev - 1);
            if(choice === answer){
                setGameWon(true);
                setGameOver(true);
            } else {
                console.log('Wrong answer')
            } 
        }
    }
    const restart = () => {
        window.location.reload(false);
    }
    if(!gameOver){ return (
        <Game onClick={game} numGuesses = {numGuesses} guessesLeft={guessesLeft}/>
    )} else if (gameOver && gameWon){
        return (
        <Win onClick={restart}/>
        );
    }else {
        return (
        <Lose onClick={restart}/>
        )
    }
}

export default NumberGuesser;
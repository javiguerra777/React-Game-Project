import './styles/game.css';
import { nanoid } from 'nanoid';
const data = [
    {
    number: 0
    },
    {
    number: 1
    },
    {
    number: 2
    },
    {
    number: 3
    },
    {
    number: 4
    },
    {
    number: 5
    },
    {
    number: 6
    },
    {
    number: 7
    },
    {
    number: 8
    },
    {
    number: 9
    },
]
const Game = (props) => {
    return (
        <main className='game'>
            <header>
            <h1>You have this number of guesses left: {props.guessesLeft}/ {props.numGuesses}</h1>
            </header>
            <h1>Select a Number to take a Guess</h1>
        <section id ="row">
        {data.map(item => <button className='choices' key={nanoid()} onClick={()=>props.onClick(item.number)}>{item.number}</button>)}
        </section>
        </main>
    );
}

export default Game;
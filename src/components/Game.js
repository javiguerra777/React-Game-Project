import './styles/game.css';
import { nanoid } from 'nanoid';
import data from '../services/data';

//Game component
const Game = (props) => {
    return (
        <main className='game'>
            <header>
            <h1>You have {props.guessesLeft} number of guesses left</h1>
            </header>
            <h1>Select a Number to take a Guess</h1>
        <section id ="row"> 
        {/* used map function to filter through data array 
        passed through the data services. */}
        {data.map(item => <button className='choices' key={nanoid()} onClick={()=>props.onClick(item.number)}>{item.number}</button>)}
        </section>
        </main>
    );
}

export default Game;
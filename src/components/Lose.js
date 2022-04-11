import './styles/endgame.css'
const Lose = (props) => {
    return (
        <main id='lostBody'>
            <section className = "endGame lostGame">
            <h1>You lost the game</h1>
            <button className='btn lost-btn' onClick={props.onClick}>Play Again</button>
            </section>
        </main>

    );
}

export default Lose;
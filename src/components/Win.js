import './styles/endgame.css'
const Win = (props) => {
    return (
        <main id = "winBody">
        <section className = 'endGame wonGame'>
        <h1>You won the game!</h1>
        <button className='btn won-btn' onClick={props.onClick}>Play Again</button>
        </section>
        </main>
    );
}
export default Win;
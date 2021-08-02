import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Alura logo') {
    return /*html*/`
    <article class="card-game">
    <img src="./src/images/${icon}.png" alt="${alt}"/>
    </article>
    `
}

export default CardGame;
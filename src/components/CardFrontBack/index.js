import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-javaScript", "JavaScript logo")}
        </article>
    `
}

export default CardFrontBack;
function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    const isFlipped = cardInner.style.transform === "rotateY(180deg)";
    cardInner.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
}

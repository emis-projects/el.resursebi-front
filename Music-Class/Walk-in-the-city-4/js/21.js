const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


// გადატრიალება
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    checkForMatch();
}

// შემოწმება ემთხვევა თუ არა პირველი და მეორე გადატრიალება ერთმანეთს
function checkForMatch() {
    let isMatch = firstCard.dataset.slide === secondCard.dataset.slide
    // თუ დაემთხვა მოვხსნათ დაკლიკვა, თუ არა გადავატრიალოთ
    isMatch ? disableCards() : unFlipCards();

}

// მოვხსნათ დაკლიკვა
function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard();
}
// გადავატრიალოთ 1 წმ შემდეგ
function unFlipCards() {
    //დავბლოკოთ მესამე, თუ 1 წმ
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard();
    }, 1000)
}
// დავაბრუნოთ დავდაპირველ მდგომარეობაზე 1 და მეორე მოვხსნათ დაბლოკვა
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));



document.getElementById('resetBtn').addEventListener("click", () => {
    cards.forEach(card => {
        card.addEventListener('click', flipCard)
        resetBoard();
        card.classList.remove('flip')
    })
})


/// ხმის გაშვება
createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["wav"];
function handleLoadComplete(event) {
    createjs.Sound.play("sound");
}
function handleLoadstop(event) {
    createjs.Sound.stop("sound");
}
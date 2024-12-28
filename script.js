const words = [
    "Alice", "Basic", "ColdFusion", "Dart", "Erlang", "Fortran", "Genie", "Hashkell",
    "Icon", "Julia", "Kotlin", "Lisp", "MATLAB", "NASM", "Oberon", "Perl", "QuackC",
    "Ruby", "Swift", "TypeScript", "Umple", "Verilog", "Whiley", "XOTcl", "Yorick", "Zenith"
];
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex].toLowerCase();
console.log(selectedWord);
let guessedList = [];
let displayWord = "";
let currentLetter = selectedWord[0]; 
let gamePhase = "initial"; 
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;
function guessLetter() {
    let inputElement = document.getElementById("letter-input");
    let letter = inputElement.value.toLowerCase();
    if (gamePhase === "initial") {
        if (!letter.match(/^[0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~\-]$/)) {
            alert("Please enter a valid number or special character.");
            inputElement.value = "";
            return;
        }
        gamePhase = "guessing";
        alert("Now, start guessing the word using alphabets!");
    }
    if (gamePhase === "guessing") {
        if (!letter.match(/^[a-zA-Z]$/)) {
            alert("Please enter a valid letter (alphabet).");
            inputElement.value = "";
            return;
        }
    }
    if (!inputElement.value) {
        alert("Empty Input box. Please add input letter");
        return;
    }
    inputElement.value = "";
    if (guessedList.includes(letter)) {
        alert("You have already guessed that letter!");
        return;
    }
    guessedList.push(letter);
    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedList.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord").textContent = updatedDisplay;
    if (allLettersGuessed) {
        alert("Congratulations! You guessed the word correctly!");
        document.getElementById("completedGameBg").style.display = "flex";
    }
}
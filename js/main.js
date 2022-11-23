function atLeastTwoCharacters(text) {
    const letters = text.match(/[a-z]/gi) || [];

    return letters.length >= 2;
}

function noConsecutiveCharacters(text) {
    for (const character of text) {
        const occurrances = Array.from(text).filter(v => v == character).length;

        if (occurrances >= 3) {
            return false;
        }
    }

    return true;
}

const checks = [atLeastTwoCharacters, noConsecutiveCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

    textLoop:
    for (const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue textLoop;
            }
        }

        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
});
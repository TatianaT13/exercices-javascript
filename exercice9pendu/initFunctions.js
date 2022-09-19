const displayChoices = (choicesMapping) => {
    const choicesHtml = choicesMapping.map((letterMapping) => {
        if (letterMapping.isChosen === false) {
           return `<li>${letterMapping.letter}</li>`;
        } else {
            return`<li class="disabled">${letterMapping.letter}</li>`;
        }
    });
    els.choices.querySelector('ul').innerHTML = choicesHtml.join('');
};

const displayScore = () => {
    //els.score.innerHTML = `${scoreCount} / ${maxScore}`;
    els.score.innerHTML = `<img src="img/img00${scoreCount}.png" alt="hangman".style.backgroundColor = 'silver' />`;
};

const displayWord = (wordMapping) => {
   const wordHtml = wordMapping.map((letterMapping) => {
        if (letterMapping.isVisible === true) {
            return `<li>${letterMapping.letter}</li>`;
        } else {
            return `<li>_</li>`;
        }
   });
   els.answer.querySelector('ul').innerHTML = wordHtml.join('');
};

const generateChoices = () => {
    const choices = [];
    for(let index = 97; index <= 122; index++) {
       choices.push(String.fromCharCode(index)); 
    }
    return choices;
};


const getChoicesMapping = (choices) => {
    const choicesMapping = choices.map((letter) => {
        return {
            letter,
            isChosen: false,
        };
    });
    return choicesMapping;
};

const getWordMapping = (word) => {
    const wordArr = word.split('');
    //console.log('word', word);
    //console.log('wordArr', wordArr);
    const wordMapping = wordArr.map((letter, index) => {
        let isVisible = false;
        if (index === 0 || index == wordArr.length - 1) {
            isVisible = true;
        }
        
        return {
            letter,
            isVisible
        };
    });
    return wordMapping;
};

const pickWord = () => {
    const randomIndex = getRandomInt(0, words.length - 1);

    return words[randomIndex];
}
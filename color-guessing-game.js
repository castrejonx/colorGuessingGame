let correct = false;

const COLORS_ARRAY = ['blue', 'cyan', 'indigo', 'silver', 'green', 'magenta', 'orange', 'red', 'teal', 'gold'];

function runGame() {
    let guess = '';
    let tryCount = 0;

    const SORTED_COLORS = COLORS_ARRAY.sort();
    const targetIndex = Math.floor(Math.random()*COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];

    console.log(target);

    do {
        tryCount++;

        guess = prompt('I am thinking of one of these colors:\n\n' + SORTED_COLORS.join(', ') + '\n\nWhat color am I thinking of?\n\nThis is try number ' + tryCount + '.\n');
        guess = guess.toLowerCase();

        if (guess === null) {
            return;
        }

        correct = checkGuess(guess, target);
        
    } while(!correct);

    document.body.style.background = guess;

    if (tryCount === 1) {
        alert('You got it! The color was ' + target + '.\n\nIt took you ' + tryCount + ' try to guess correctly.');
    } else {
        alert('You got it! The color was ' + target + '.\n\nIt took you ' + tryCount + ' tries to guess correctly.');
    }    
}

function checkGuess(guess, target) {
    let correct = false;

    if(!COLORS_ARRAY.includes(guess)) {
        alert('Sorry, I don\'t recognize your color');
        return false;      
    } else if(guess > target) {
        alert('Hint: Your color is alphabetically higher than mine.');
        return false;
    } else if(guess < target) {
        alert('Hint: Your color is alphabetically lower than mine.');
        return false;
    } else {
        return true;
    }

}
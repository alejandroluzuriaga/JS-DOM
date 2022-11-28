//There are two ways of working with timers. timeOut and Intervals.. In this file we'll see the second one: setInterval().
//setInterval(we specify how often do we want to execute a block of code (in miliseconds))
// Their functions are called 'callbacks' too.
// Its possible to delete an Interval with clearInterval() function.

// setInterval(function, 500) //Two parameters. Function to execute, and time in miliseconds to launch the function again in loop.

                    // To learn about Intervals we'll be programming a little game similar to Whac-a-mole (hit the moles to win points)

const countDown = document.querySelector('#countdown-number')
const startButton = document.querySelector('#start-button')
const gameButtons = document.querySelectorAll('.game-button')
const pointsTitle = document.querySelector('#points')
let previousButton;
let points = 0;
let startButtonPressed = false;
let actualCountDown = countDown;


    const handleToggleButtons = () =>{
        if (previousButton){
            previousButton.classList.remove('show')
        }
        const randomIndex = Math.floor(Math.random() * gameButtons.length);
        const randomButton = gameButtons[randomIndex];

        randomButton.classList.add('show');
        randomButton.classList.remove('not-clickable')

        previousButton = randomButton;
    }

    const handleClickGameButton = (event) =>{
        const isClickable = event.target.className.includes('show')
        if (isClickable){
            points += 1;
            pointsTitle.innerText = points;
            event.target.classList.add('not-clickable')
        }
    }

for(let i = 0; i < gameButtons.length; ++i){
    const gameButton = gameButtons[i];

    gameButton.addEventListener('click', handleClickGameButton);
}

const toggleRestartGame = () =>{
    if(!startButtonPressed){
        startButtonPressed = true;
        startButton.classList.remove('cursor')
        setInterval(handleToggleButtons, 1000);
    }
}
const toggleStartPressed = () =>{
    setTimeout(toggleRestartGame, 10000)
}

startButton.addEventListener('click', toggleStartPressed);
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
let interval1, interval2, interval3;
let time1 = 20000;
let time2 = 1000;
let actualCountDown = time1/1000;

    const toggleStartPressed = () =>{
        if(!startButtonPressed){
            toggleStartGame();
        } else{
            toggleStopGame();
        }
    }

    const toggleStartGame = () =>{
        if(!startButtonPressed){
            startButtonPressed = true;
            countDownActive();
        }
    }

    const countDownActive = () =>{
        interval2 = setInterval(toggleStopGame, time1);
        countDown.innerText = time1/1000;
        interval3 = setInterval(countDownDecreaser, 1000);
        interval1 = setInterval(handleToggleButtons, time2);
    }

    const countDownDecreaser = () =>{
        countDown.innerText = (actualCountDown - 1);
        actualCountDown -= 1;
    }
    
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

    const handleMonkeyButton = (event) =>{
        const isClickable = event.target.className.includes('show')
        if (isClickable){
            points += 1;
            pointsTitle.innerText = points;
            event.target.classList.add('not-clickable')
        }
    }

    const toggleStopGame = () =>{
        startButtonPressed = !startButtonPressed;
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        points = 0;
        pointsTitle.innerText = points;

    }

for(let i = 0; i < gameButtons.length; ++i){
    const gameButton = gameButtons[i];

    gameButton.addEventListener('click', handleMonkeyButton);
}
startButton.addEventListener('click', toggleStartPressed);
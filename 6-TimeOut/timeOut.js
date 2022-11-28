//There are two ways of working with timers. timeOut and Intervals. In this file we'll see the first one: setTimeOut().
// setTimeOut (its a countdown where we specify what to do at the end of it)
// Their functions are also called 'callbacks'.
// Its possible to delete a timeOut with clearTimeout() function.

// setTimeout(function, 1000)//Two parameters. Function to execute, and time (in miliseconds) to wait before execution.

//Let's try to do an example where timeOut is useful. We'll program a lightbulb that has a button to turn it on, and after
// a specific time, it will turn off immediatly.

let timeOutTime = 1500;
let timeOut;

const timerInput = document.querySelector('#timer');
const toggleButton = document.querySelector('#toggle');
const lightbulb = document.querySelector('#lightbulb');

    const handleInputTime = (event) =>{
        const newTimer = event.target.value;
        timeOutTime = newTimer;
    }

    const toggleLightbulb = () =>{
        lightbulb.classList.toggle('off'); //toggle adds if the class is not present, and removes it if its present.
        lightbulb.classList.toggle('on');
    }

    const toggleLightbulbOff = () =>{
        lightbulb.classList.add('off');
        lightbulb.classList.remove('on');
    }
    const handleToggle = () =>{
        if (timeOut != undefined){ //if timeOut != undefined, then exist a previous timeOut. We need to clear it
            clearTimeout(timeOut);
        }
        toggleLightbulb();
        timeOut = setTimeout(toggleLightbulbOff, timeOutTime)
    }

toggleButton.addEventListener('click', handleToggle);
timerInput.value = timeOutTime;
timerInput.addEventListener('input', handleInputTime)
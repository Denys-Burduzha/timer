// timer fields
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const millisecondEl = document.querySelector('.millisecond')

// Buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')

// Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearTimer()
    disabledBtn()
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter += 1
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results__info')
    block.innerText = `Result: ${counter} :${hour}:${minute}:${second}:${millisecond}`
    results.append(block)
    clearTimer()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

// veriables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true
    

function startTimer() {
    millisecond += 1;
    if (millisecond < 9) {
        millisecondEl.innerText = '0' + millisecond 
    };

    if (millisecond > 9 ) {
        millisecondEl.innerText = millisecond 
    }

    if (millisecond > 99) {
        second += 1
        secondEl.innerText = '0' + second
        millisecond = 0
        millisecondEl.innerText = '0' + millisecond
    }

    // second
    if (second < 9) {
        secondEl.innerText = '0' + second 
    };

    if (second > 9 ) {
        secondEl.innerText = second 
    }

    if (second > 59) {
        minute += 1
        minuteEl.innerText = '0' + minute
        second = 0
        secondEl.innerText = '0' + second
    }

    // Minutes
     if (minute < 9) {
        minuteEl.innerText = '0' + minute 
    };

    if (minute > 9 ) {
        minuteEl.innerText = minute 
    }

    if (minute > 59) {
        hour += 1
        minuteEl.innerText = '0' + minute
        minute = 0
        minuteEl.innerText = '0' + minute
    }

    
    newButton.disabled = false

};

function clearTimer() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourEl.textContent = '00'
    minuteEl.textContent = '00'
    secondEl.textContent = '00'
    millisecondEl.textContent = '00'
}

function disabledBtn() {
    if (disabled) {
        newButton.disabled = true
    }
}

disabledBtn()

       
    
const generatorInput = document.querySelector('.pin-generator > .form-control');
const generateBtn = document.querySelector('.pin-generator > .generate-btn');

const userInput = document.querySelector('.input-section > .form-control')
const calculatorBtns = document.querySelectorAll('.calc-body .btn');

const submitBtn = document.querySelector('.input-section .submit-btn');
const submitTry = document.querySelector('.input-section .action-left');
const matched = document.querySelector('.notify-section .matched')
const notMatched = document.querySelector('.notify-section .notmatched')

let generatedPin = 0;
let submittedPin = 0;
let tryMatch = 3

//Generate Random Number
generateBtn.addEventListener('click', pinGenerator)

//Calculator Buttons Click
calculatorBtns.forEach(btn=>btn.addEventListener('click', userPinGenerator))
submitBtn.addEventListener('click', handlePinSubmit)


function pinGenerator() {
    generatePin = Math.floor(1000 + Math.random() * 9000);
    generatorInput.value = generatePin;
    generatorInput.disabled = true;
    generatorInput.classList.add('active');
    userInput.focus();
    userInput.value=""
  
}

function userPinGenerator(e) {
    const {innerText: btnLabel} = e.target;
    userInput.disabled = true;

    if(btnLabel === '<'){
        userInput.value = userInput.value.slice(0, -1)
    }else if(btnLabel === 'C'){
        userInput.value = '';
    }else{
        if(userInput.value.length < 4){
            userInput.value += btnLabel;
            submittedPin = parseInt(userInput.value)
        }
    }
}

function handlePinSubmit() {
    userInput.value = '';
    userInput.blur();

    if(generatePin > 0 && submittedPin > 0){
        tryMatch--;
        if(generatePin !== submittedPin){
            submittedPin= 0;
            submitTry.innerHTML = `${tryMatch} try left`;
            submitTry.style.color = '#ff3c5f';

            notMatched.classList.add('active');
            setTimeout(()=>{
                notMatched.classList.toggle('active')
            }, 3000);
        }
    }else if(generatePin === 0 || submittedPin === 0){
        console.log('Pin:', generatedPin, 'u-pin:',
        submittedPin, 'one 0');
    }
    if(tryMatch === 0){
        submitBtn.disabled= true;
    }
    if(generatePin >0 && generatePin === submittedPin){
        generatePin = 0;
        submittedPin = 0;
        tryMatch = 3;

        generatorInput.value = '',
        generatorInput.disabled = false;
        generatorInput.classList.remove('active');

        userInput.disabled = false;
        userInput.value="";
        submitTry.innerHTML = `${tryMatch} try left`;

        matched.classList.add('active');
        setTimeout(()=>{
            matched.classList.toggle('active');
        }, 3000)
    }
}
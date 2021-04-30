const generatorInput = document.querySelector('.pin-generator > .form-control');
const generateBtn = document.querySelector('.pin-generator > .generate-btn');

const userInput = document.querySelector('.input-section > .form-control')
const calculatorBtns = document.querySelectorAll('.calc-body .btn');


//Generate Random Number
generateBtn.addEventListener('click', pinGenerator)

//Calculator Buttons Click
calculatorBtns.forEach(btn=>btn.addEventListener('click', userPinGenerator))


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
        }
    }
}


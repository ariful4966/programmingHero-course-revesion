const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

buttons.forEach(function(button){
    button.addEventListener('click', calculate);
});

function calculate(event){
    const clickedBtnValue = event.target.value;
    if(clickedBtnValue === '='){
        if(display.value !== ''){
            display.value = eval(display.value)
        }
    }else if(clickedBtnValue === 'C'){
        display.value = '';
    }else{
        display.value += clickedBtnValue;
    }
};
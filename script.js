//login btn event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none'
    const transactioArea = document.getElementById('transaction-area')
    transactioArea.style.display = 'block'
})

// deposite btn event handler

const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {
    const depositeNumber = getInputNumber('deposit-amount')

    if (depositeNumber > 0) {
        updateSpanText('currentDeposit', depositeNumber)
        updateSpanText('current-balance', depositeNumber)
    }
    else{
        alert('Deposit Number Cannot be negative')
    }

    document.getElementById('deposit-amount').value = '';
})

// Withdrow btn event handler

const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdraw-amount')

    if (withdrawNumber > 0) {
        updateSpanText('currentWithdraw', withdrawNumber);
        updateSpanText('current-balance', -1 * withdrawNumber)
    }

    document.getElementById('withdraw-amount').value = '';
})


function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number
}

function updateSpanText(id, depositeNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositeNumber + currentNumber;

    document.getElementById(id).innerText = total;
}

// confirm('Are you comming in the picnic');


// prompt('What is your name');
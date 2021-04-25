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

    updateSpanText('currentDeposit', depositeNumber)
    updateSpanText('current-balance', depositeNumber)

    document.getElementById('deposit-amount').value = '';
})

const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdraw-amount')

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('current-balance', -1 * withdrawNumber)

    document.getElementById('withdraw-amount').value = '';
})
function getInputNumber(id){
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
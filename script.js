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
    const depositAmount = document.getElementById('deposit-amount').value;
    const depositeNumber = parseFloat(depositAmount);

    updateSpanText('currentDeposit', depositeNumber)
    updateSpanText('current-balance', depositeNumber)

    document.getElementById('deposit-amount').value = '';

})

function updateSpanText(id, depositeNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositeNumber + currentNumber;

    document.getElementById(id).innerText = total;
}
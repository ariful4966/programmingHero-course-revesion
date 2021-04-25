//login btn event handler
const loginBtn = document.getElementById('login');
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById('login-area');
            loginArea.style.display ='none'
            const transactioArea = document.getElementById('transaction-area')
            transactioArea.style.display='block'
        })

        // deposite btn event handler

        const depositBtn = document.getElementById('deposit');
        depositBtn.addEventListener('click', function(){
            const depositAmount = document.getElementById('deposit-amount').value;
            const depositeNumber = parseFloat(depositAmount);
            
            const currentDeposit = document.getElementById('currentDeposit').innerText;
            const currentDepositNumber = parseFloat(currentDeposit);

            const totalDeposit = depositeNumber + currentDepositNumber


            document.getElementById('currentDeposit').innerText = totalDeposit;

            document.getElementById('deposit-amount').value='';

        })
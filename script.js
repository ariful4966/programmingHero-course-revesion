const loginBtn = document.getElementById('login');
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById('login-area');
            loginArea.style.display ='none'
            const transactioArea = document.getElementById('transaction-area')
            transactioArea.style.display='block'
        })
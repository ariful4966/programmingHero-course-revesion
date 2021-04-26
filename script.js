//phone Pices ++
const phonePlus = document.querySelector('#phonePlus')
phonePlus.addEventListener('click', () => {
    const phonePice = piceUpdate('#phonePice');

    const totalPrice = priceUpdate('#singlePhone', phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;
})

//Phone Pices --
const phoneMinus = document.querySelector('#phoneMinus');
phoneMinus.addEventListener('click', () => {
    const phonePice = piceUpdateMinus('#phonePice')

    const totalPrice = priceUpdate('#singlePhone', phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;

})

//Casin Pices ++
const casePlus = document.querySelector('#casePlus');
casePlus.addEventListener('click', ()=>{
    const casePice = piceUpdate('#casePice');
    
    const totalPrice = priceUpdate('#singleCase', casePice)
    document.querySelector('#casPrice').innerText = totalPrice;
})

//Casin Minus --
const caseMinus = document.querySelector('#caseMinus');
caseMinus.addEventListener('click', ()=>{
    const casePice = piceUpdateMinus('#casePice');
    
    const totalPrice = priceUpdate('#singleCase', casePice)
    document.querySelector('#casPrice').innerText = totalPrice;
})

function piceUpdate(id) {
    const phonePice = document.querySelector(id).value++;
    const piceNumber = parseFloat(phonePice);
    return piceNumber + 1

}
function piceUpdateMinus(id) {
    const phonePice = document.querySelector(id).value;
    if(phonePice > 1){
         document.querySelector(id).value--;
        const piceNumber = parseFloat(phonePice);
        return piceNumber - 1
    }else{
        document.querySelector(id).value;
        const piceNumber = parseFloat(phonePice);
        return piceNumber 
    }
        
    

}
function priceUpdate(id, phonePice) {
    const phonePrice = document.querySelector(id).innerText;
    const priceAmount = parseFloat(phonePrice);
    const totalPrice = priceAmount * phonePice
    return totalPrice
}
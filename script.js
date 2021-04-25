const phonePlus = document.querySelector('#phonePlus')
phonePlus.addEventListener('click', () => {
    const phonePice = piceUpdate('#phonePice');

    const totalPrice = priceUpdate('#mainPrice', phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;
})

const phoneMinus = document.querySelector('#phoneMinus');
phoneMinus.addEventListener('click', () => {
    const phonePice = piceUpdateMinus('#phonePice')
    console.log(phonePice);

    const totalPrice = priceUpdate('#mainPrice', phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;

})

function piceUpdate(id) {
    const phonePice = document.querySelector(id).value++;
    const piceNumber = parseFloat(phonePice);
    return piceNumber + 1

}
function piceUpdateMinus(id) {
    const phonePice = document.querySelector(id).value--;
        const piceNumber = parseFloat(phonePice);
        return piceNumber - 1
    

}
function priceUpdate(id, phonePice) {
    const phonePrice = document.querySelector(id).innerText;
    const priceAmount = parseFloat(phonePrice);
    const totalPrice = priceAmount * phonePice
    return totalPrice
}
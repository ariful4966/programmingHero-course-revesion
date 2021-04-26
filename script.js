//phone Pices ++
const phonePlus = document.querySelector('#phonePlus')
phonePlus.addEventListener('click', () => {
    const phonePice = piceUpdate('#phonePice');
    const phonePrice = priceNumber('#singlePhone')

    const totalPrice = priceUpdate(phonePrice, phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;



    //subtotal Amount Area
    const casePrice = priceNumber('#casPrice')
    const subtotal = subTotal(casePrice, totalPrice)

    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotal, persent)

    //Grand Total
    grandTotal(subtotal, persenTage)

})

//Phone Pices --
const phoneMinus = document.querySelector('#phoneMinus');
phoneMinus.addEventListener('click', () => {
    const phonePice = piceUpdateMinus('#phonePice')
    const phonePrice = priceNumber('#singlePhone')

    const totalPrice = priceUpdate(phonePrice, phonePice)
    document.querySelector('#phonePrice').innerText = totalPrice;

    //subtotal Amount Area
    const casePrice = priceNumber('#casPrice')
    const subtotal = subTotal(casePrice, totalPrice)

    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotal, persent)

    //Grand Total
    grandTotal(subtotal, persenTage)
})

//Casin Pices ++
const casePlus = document.querySelector('#casePlus');
casePlus.addEventListener('click', () => {
    const casePice = piceUpdate('#casePice');
    const casePrice = priceNumber('#singleCase')

    const totalPrice = priceUpdate(casePrice, casePice)
    document.querySelector('#casPrice').innerText = totalPrice;

    //total Amount Area
    const phonePrice = priceNumber('#phonePrice')
    const subtotal = subTotal(phonePrice, totalPrice)
    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotal, persent)

    //Grand Total
    grandTotal(subtotal, persenTage)
})

//Casin Minus --
const caseMinus = document.querySelector('#caseMinus');
caseMinus.addEventListener('click', () => {
    const casePice = piceUpdateMinus('#casePice');
    const casePrice = priceNumber('#singleCase')

    const totalPrice = priceUpdate(casePrice, casePice)
    document.querySelector('#casPrice').innerText = totalPrice;

    //total Amount Area
    const phonePrice = priceNumber('#phonePrice')
    const subtotal = subTotal(phonePrice, totalPrice)
    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotal, persent)

    //Grand Total
    grandTotal(subtotal, persenTage)


})

//Phone Remove
const phoneRemove = document.querySelector('#phoneRemove')
phoneRemove.addEventListener('click', ()=>{
    document.querySelector('#phoneItem').style.display='none';

    const subtotal = priceNumber('#subTotal')
    const phonePrice = priceNumber('#phonePrice')
    const subtotalAmount = subTotal(subtotal, -1 * phonePrice)

    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotalAmount, persent)

    //Grand Total
    grandTotal(subtotalAmount, persenTage)
})

//Casin Remove

const casinRemove = document.querySelector('#casinRemove')
casinRemove.addEventListener('click', () => {
    document.querySelector('#casinItem').style.display = 'none';

    const subtotal = priceNumber('#subTotal')
    const casPrice = priceNumber('#casPrice')
    const subtotalAmount = subTotal(subtotal, -1 * casPrice)

    //persentage Amount
    const persent = inputNumber('#persent')
    const persenTage = persentage(subtotalAmount, persent)

    //Grand Total
    grandTotal(subtotalAmount, persenTage)
})

function piceUpdate(id) {
    const phonePice = document.querySelector(id).value++;
    const piceNumber = parseFloat(phonePice);
    return piceNumber + 1

}
function piceUpdateMinus(id) {
    const phonePice = document.querySelector(id).value;
    if (phonePice >= 1) {
        document.querySelector(id).value--;
        const piceNumber = parseFloat(phonePice);
        return piceNumber - 1
    } else {
        document.querySelector(id).value;
        const piceNumber = parseFloat(phonePice);
        return piceNumber
    }



}

function priceNumber(id) {
    const price = document.querySelector(id).innerText;
    const number = parseFloat(price)
    return number
}
function inputNumber(id) {
    const count = document.querySelector(id).value;
    const number = parseFloat(count)
    return number
}

function priceUpdate(price, pice) {
    const total = price * pice
    return total
}

function subTotal(casePrice, phonePrice) {
    const subtoTatalAmount = phonePrice + casePrice;
    document.querySelector('#subTotal').innerText = subtoTatalAmount;
    return subtoTatalAmount
}

function persentage(subTotal, persent) {
    const perAmount = subTotal / 100 * persent
    document.querySelector('#persentAmount').innerText = perAmount.toFixed(2);
    return perAmount
}

function grandTotal(subtotal, persenTage) {
    const grandTotal = subtotal + persenTage
    document.querySelector('#grandTotal').innerText = grandTotal.toFixed(2)
}

function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('Your age', age);
    task()
}
function washHand(){
    console.log('Wash Hand with soap');
}

function takeShower(){
    console.log('Take Shower');
}
function scroll_facebook(){
    console.log("Scroll facebook but don't like any post");
}
explain_callback('Sogir Uddin', 17, washHand)
explain_callback('Jogir Uddin', 13, takeShower)
explain_callback('Mugir Uddin', 21, scroll_facebook)
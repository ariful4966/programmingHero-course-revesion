function welComeGuest(name, greetHandler) {
    greetHandler(name)

}
const actorName = 'Tom Hanks';

function greetUserMorning(name) {
    console.log('Good Morning', name);
}
function greetUserEvining(name) {
    console.log('Good Evening', name);
}
function greetUserAfternoon(name) {
    console.log('Good Afternoon', name);
}
welComeGuest(actorName, greetUserAfternoon);
welComeGuest('Kate Winslet', greetUserEvining)
welComeGuest('Shakib Khan', function(){
    console.log('Special Welcome');
})


function handleClick(){
    console.log('some clicked Me');
}
// document.getElementById('click').addEventListener('click', function(){
//     console.log('click me again');
// })
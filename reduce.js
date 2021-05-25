const friends = [
    {name: 'Rashed', money: 12},
    {name: 'kashed', money: 25},
    {name: 'Pashed', money: 37},
    {name: 'Nashed', money: 29},
    {name: 'Munia', money: 100},
];

const total = friends.reduce((sum, friend) => {
    // console.log(sum, friend);
    return sum + friend.money;
},
    0)
// console.log(total);

const final = friends.reduce((sum, friend)=> sum+ friend.money, 0);
console.log(final);
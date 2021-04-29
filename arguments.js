function getFullName(firstName, lastName) {
    let fullName = '';
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + " " + namePart;
    }
    return fullName;
}

const name = getFullName( 'Hanif', 'songkhet', 'Poribohon', 'subokta', 'jonodorodi')

console.log(name);
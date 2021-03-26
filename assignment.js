function feetToMile(feet) {
    var mile = feet / 5280
    return mile
}

var mile = feetToMile(480)
console.log(mile);

// 02 function

function woodCalculator(chear, table, bed) {

    var oneChear = 1;
    var chears = oneChear * chear

    var oneTable = 3;
    var tables = oneTable * table

    var oneBed = 5;
    var beds = oneBed * bed


    var totalWood = chears + tables + beds;
    return totalWood
}
var wood = woodCalculator(3, 2, 1)
console.log(wood);

// 03 function

function brickCalculator(cieling) {
    var oneFeet = 1000;
    var oneTotenCile = 15;
    var elevenToTowenty = 12;
    var towentyOneup = 10;

    if (cieling <= 10) {
        var fristLavel = oneFeet * oneTotenCile * cieling;
        return fristLavel
    }
    else if (cieling > 10 && cieling <= 20) {
        var secondLavel = oneFeet * 10 * oneTotenCile;
        secondLavel += oneFeet * (cieling - 10) * elevenToTowenty;
        // secondLavel *= eleventToTowenty
        return secondLavel
    }
    else {
        var thirdLavel = oneFeet  * oneTotenCile * 10; //150000
            thirdLavel  += oneFeet * 10 * elevenToTowenty; //120000
         thirdLavel += oneFeet * (cieling - 20) * towentyOneup // 100000

        return thirdLavel
    }

}

var totalBricks = brickCalculator(25)
console.log(totalBricks);
// 04 function

function tinyFriend(name) {
    var singleName = []
    for(var i = 0; i< name.length; i++){
        var element = name[i];
        var oneName = element.length
        singleName.push(element)
    }


    return singleName
}
var name =['Azizul' , 'Asia']
var result = tinyFriend(name);
console.log(result);
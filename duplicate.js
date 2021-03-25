var name = [3, 6, 3, 7, 9, 3, 8, 1, 9, 11, 56, 2];

var uniqueName = [];

for(var i = 0; i<name.length; i ++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName);
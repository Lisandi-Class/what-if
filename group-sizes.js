prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter Class Size '));

if (groupSize % 3 === 0){
    console.log(groupSize/3, 'groups of threes')
}
else if (groupSize % 3 === 1){
    console.log((groupSize - 4)/3, 'groups of threes', 2,'groups of twos')
}
else if (groupSize % 3 ===2){
    console.log((groupSize-2)/3, 'groups of threes', 1, 'group of twos')
}
else if (groupSize % 3 === 4){
    console.log((groupSize - 4)/3, 'groups of threes', 2, 'groups of twos')
}
else{
    console.log('error')
}
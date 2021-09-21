const prompt = require('prompt-sync')();

const age = Number(prompt('Enter Age: '));

if (age < 16){
    console.log("You can't drive");
}
else if (age === 16 && age < 18){
    console.log("You can drive but not vote")
}
else if (age > 17 && age < 25){
    console.log("You can voute but not rent a car")
}
else{
        console.log("You can pretty much do anything")
}
prompt = require('prompt-sync')();

const earthWeight = Number(prompt('Enter Earth Weight '));
const planet = Number(prompt('Enter number of planet '));

if (planet === 1){
    console.log(earthWeight * .78, 'is your target weight')
}
else if (planet ===2){
    console.log(earthWeight * .39, 'is your target weight')
}
else if (planet === 3){
    console.log(earthWeight * 2.65, 'is your target weight')
}
else if (planet === 4){
    console.log(earthWeight * 1.17, 'is your target weight')
}
else if (planet === 5){
    console.log(earthWeight * 1.05, 'is your target weight')
}
else if (planet === 6){
    console.log(earthWeight * 1.23, "is your target weight")
}
else{
    console.log("error, You're outside of this Galaxy")
}
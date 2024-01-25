
let userInput = prompt("Please enter ice cream flavors");
let flavorArr = userInput.split(" ");
const flavors = {};
for(const flavor of flavorArr)
    if(flavor in flavors === false)
        flavors[flavor] = 1;
    else
        flavors[flavor] += 1;


for(const flavor in flavors)
    console.log(flavors[flavor]);


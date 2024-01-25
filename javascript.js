
/**
 * @returns array of words entered into prompt
 */
function getInput() {
    let userInput = prompt("Please enter ice cream flavors");
    return userInput.split(",");
}

/**
 * 
 * @param {String[]} arr an array of Strings 
 * @returns flavors that counts flavor types
 */
function getObj(flavorArray) {
    const flavors = {};
    for(const word of flavorArray)
        if(word in flavors)
            flavors[word] += 1;
        else
            flavors[word] = 1;
    return flavors;
}

/**
 * 
 * @param {flavor{}} object that counts flavors
 */
function printFlavors(flavors) {
    for(const flavor in flavors)
        console.log(`${flavor} has ${flavors[flavor]}`);
}


printFlavors(getObj(getInput()));


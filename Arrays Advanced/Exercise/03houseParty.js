// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.

// Examples:
// Input	                        Output
// ['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']	        John is not in the list!
//                                 Allie
// ['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']	            Tom is already in the list!
//                                 Tom
//                                 Annie
//                                 Garry
//                                 Jerry


function houseParty(array) {

    let listArray = [];

    for (element of array) {
        let guestArray = element.split(' ');
        //console.log(guestArray);
        let name = guestArray.shift();
        //console.log(name);
        if (!guestArray.includes('not')) {
            if (listArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                listArray.push(name);
            }
        } else {
            if (!listArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = listArray.indexOf(name);
                listArray.splice(index,1);
            }
        }
    }


    console.log(listArray.join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
console.log(`------------------`);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);
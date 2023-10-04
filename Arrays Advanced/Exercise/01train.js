// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).
// Example
// Input	                        Output
// ['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']	                        72 54 21 12 4 75 23 10 0
// ['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6']	                        10 10 10 10 10 10 10


function train(input) {

    let wagons = input.shift().split(' ').map(Number);
    //console.log(wagons);
    let capacity = Number(input.shift());
    //console.log(capacity);
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        //console.log(command);
        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            for (j = 0; j < wagons.length; j++) {
                if (wagons[j] + Number(command[0]) <= capacity) {
                    wagons[j] = wagons[j] + Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons);
}
//72 54 21 12 4 75 23 10 0
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
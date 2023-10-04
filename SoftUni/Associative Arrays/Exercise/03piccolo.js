// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

// Examples:
// Input	                Output
// ['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']	        CA2822UU
//                          CA2844AA
//                          CA9876HH
//                          CA9999TT
// ['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']	        Parking Lot is Empty


function piccolo(input) {

    let parking = new Set();

    for (element of input) {
        let tokens = element.split(', ');
        //console.log(tokens);
        let [command, carNumber] = tokens;
        //console.log(command, carNumber);

        switch (command) {
            case 'IN':
                parking.add(carNumber);
                break;
            case 'OUT':
                parking.delete(carNumber);
                break;
        }
    }
    if (parking.size = 0) {
        return console.log(`Parking Lot is Empty`);
    }

    let sorted = Array.from(parking.values()).sort();
    //console.log(sorted);

    for (el of sorted) {
        console.log(el);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
); 
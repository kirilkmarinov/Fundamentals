// Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.

// Example:
// Input	                Output
// ['Tim 0834212554',
//  'Peter 0877547887',
//  'Bill 0896543112',
//  'Tim 0876566344']	    Tim -> 0876566344
//                         Peter -> 0877547887
//                         Bill -> 0896543112
// ['George 0552554',
//  'Peter 087587',
//  'George 0453112',
//  'Bill 0845344']	    George -> 0453112
//                         Peter -> 087587
//                         Bill -> 0845344


function phoneBook(input) {

    let obj = {};

    for (el of input) {
        let [name, phoneNumber] = el.split(' ');
        obj[name] = phoneNumber;
    }

    // for (let key in obj) {
    //     console.log(key, "->", obj[key]);
    // }

    for (let [name, phoneNumber] of Object.entries(obj)) {
        console.log(name, "->", phoneNumber);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
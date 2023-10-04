// Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.
// Input	Output
// ['Tim:Doe Crossing',
//  'Bill:Nelson Place',
//  'Peter:Carlyle Ave',
//  'Bill:Ornery Rd']	            Bill -> Ornery Rd
//                                 Peter -> Carlyle Ave
//                                 Tim -> Doe Crossing
// ['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']	            Bill -> Gateway Way
//                                 Bob -> Redwing Ave
//                                 George -> Mesta Crossing
//                                 Jeff -> Huxley Rd
//                                 John -> Grover Rd
//                                 Peter -> Huxley Rd
//                                 Ted -> Gateway Way


function addressBook(input) {
    
    let adresses = {};

    for (el of input) {
        let [name, adress] = el.split(':');
        //console.log(name, adress);
        adresses[name] = adress;
    }

    let properties = Object.entries(adresses);
    let sorted = properties.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, adress] of sorted) {
        console.log(name, "->", adress);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
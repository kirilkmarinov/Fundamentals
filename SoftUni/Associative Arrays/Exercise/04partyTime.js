// There is a party. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists. 
// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

// Examples:
// Input	                Output
// ['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ]	                    2
//                         7IK9Yo0h
//                         tSzE5t0p
// ['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]	                2
//                     xys2FYzn
//                     MDzcM9ZK


function partyTime(input) {

    let vipSet = new Set();
    let normalSet = new Set();
    isParty = false;

    for (el of input) {
        if (el === "PARTY") {
            isParty = true;
            continue;
        }
        if (!isParty) {
            let firstChar = Number(el[0]);
            if (isNaN(firstChar)) {
                normalSet.add(el);
            } else {
                vipSet.add(el);
            }
        } else {
            normalSet.delete(el);
            vipSet.delete(el);
        }
        
    }

    let count = normalSet.size + vipSet.size;
    console.log(count);

    for (el of vipSet) {
        console.log(el);
    }
    for (el of normalSet) {
        console.log(el);
    }

    
    console.log(vipSet);
    console.log(normalSet);
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
); 
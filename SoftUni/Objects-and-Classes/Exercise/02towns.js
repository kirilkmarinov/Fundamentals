// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

// Examples:
// Input
// ['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
//                                         Output
//                                         { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
//                                         { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

// Input
// ['Plovdiv | 136.45 | 812.575']
//                                         Output
//                                         { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }


function towns(input) {

let townObj = {};

for (el of input) {
    let cityProperties = el.split(' | ');
    let cityName = cityProperties[0];
    let cityLatitude = Number(cityProperties[1]);
    let cityLongitude = Number(cityProperties[2]);

    townObj.town = cityName;
    townObj.latitude = cityLatitude.toFixed(2);
    townObj.longitude = cityLongitude.toFixed(2);

    console.log(townObj);
}
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
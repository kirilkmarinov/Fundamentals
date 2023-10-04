// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.

// Examples:
// Input	                        Output
// {
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// }	                            name -> Sofia
//                                  area -> 492
//                                  population -> 1238438
//                                  country -> Bulgaria
//                                  postCode -> 1000
// {
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// }	                            name -> Plovdiv
//                                  area -> 389
//                                  population -> 1162358
//                                  country -> Bulgaria
//                                  postCode -> 4000


function city(cityInfo) {

    //let cityProperties = Object.entries(cityInfo);
    for (let [key, value] of Object.entries(cityInfo)) {
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
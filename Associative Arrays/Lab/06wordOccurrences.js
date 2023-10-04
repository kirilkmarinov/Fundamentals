// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.

// Example:
// Input	                                                                                                                            Output
// ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]	    sentence -> 3 times
//                                                                                                                                     Here -> 2 times
//                                                                                                                                     is -> 2 times
//                                                                                                                                     the -> 2 times
//                                                                                                                                     first -> 1 times
//                                                                                                                                     another -> 1 times
//                                                                                                                                     And -> 1 times
//                                                                                                                                     finally -> 1 times
//                                                                                                                                     third -> 1 times

// Input	                                                                                                                            Output
// ["dog", "bye", "city", "dog", "dad", "boys", "ginger"]	                                                                            dog -> 2 times
//                                                                                                                                     bye -> 1 times
//                                                                                                                                     city -> 1 times
//                                                                                                                                     dad -> 1 times
//                                                                                                                                     boys -> 1 times
//                                                                                                                                     ginger -> 1 times


function wordOccurrences(input) {

    let map = new Map();
    let counter = 0;

    for (elements of input) {
        let word = elements.split(' ');
        //console.log(word);
        
            map.set(word, counter);
            counter++;
        
        //console.log(counter);


    }
    console.log(map);
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);
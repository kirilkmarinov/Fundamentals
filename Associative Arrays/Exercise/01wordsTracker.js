// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.

// Example:
// Input	                                            Output
// [
// 'this sentence', 
// 'In', 'this','sentence', 'you', 'have', 
// 'to', 'count', 'the', 'occurrences', 'of', 
// 'the', 'words', 'this', 'and', 'sentence', 
// 'because', 'this', 'is', 'your', 'task'
// ]	                                                this - 3
//                                                     sentence - 2
// [
// 'is the', 
// 'first', 'sentence', 'Here', 'is', 
// 'another', 'the', 'And', 'finally', 
// 'the', 'the', 'sentence']	                        the – 3
//                                                     is - 1


function wordsTracker(input) {

    let map = new Map();

    let words = input.shift().split(' ');
    
    for (let word of words) {
        map.set(word, 0);
    }
    
    for (let word of input) {
        if (map.has(word)) {            
            //map.set(word, map.get(word) + 1);
            let oldValue = map.get(word);
            map.set(word, oldValue + 1);
        }
    }
    let sorted = Array.from(map).sort((a, b) => { return b[1]-a[1]}); 
    // let sorted = Array.from(map).sort(([keyA, valueA], [keyB, valueB]) => {
    //     return valueB - valueA
    // });
    
    for (let [key, value] of sorted) {
        console.log(key, "-", value);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
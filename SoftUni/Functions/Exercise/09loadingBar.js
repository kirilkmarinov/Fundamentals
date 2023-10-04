// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

// Examples:
// Input	    Output
// 30	        30% [%%%.......]
//             Still loading...

// 50	        50% [%%%%%.....]
//             Still loading...

// 100	        100% Complete!
//             [%%%%%%%%%%]


function loadingBar(input) {

    let complete = '%'.repeat(input/10);
    //console.log(complete);
    let incomplete = '.'.repeat(10 - complete.length);
    //console.log(incomplete);

    if (incomplete.length !== 0) {
        console.log(`${input}% [${complete}${incomplete}]`);
        console.log(`Still loading...`);
    }else{
        console.log(`100% Complete!`);
    }

}
loadingBar(30);
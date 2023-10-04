// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"
// Examples
// Input	                Output
// [123,323,421,121]	    false
//                         true
//                         false
//                         true	      	

// [32,2,232,1010]	        false
//                         true
//                         true
//                         false


function palindromeIntegers(input) {

for (element of input) {
    //console.log(element);
    let currentElement = element.toString();
    let reverceedElement = element.toString().split('').reverse().join('');
    //console.log(reverceedElement);
    if (currentElement === reverceedElement) {
        console.log(true);
    }else{
        console.log(false);
    }
}


}
palindromeIntegers([123, 323, 421, 121]);
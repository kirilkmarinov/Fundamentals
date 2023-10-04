const getGets = (arr) => { 
    let index = 0; 
 
    return () => { 
        const toReturn = arr[index]; 
        index += 1; 
        return toReturn; 
    };
 };
 // This is the place where you must place your test data 
const test = [ 
 
    '1', // This is the first line from the test. 
    '', // This is the first line from the test. 
 
 
 ];
 
 const gets = this.gets || getGets(test); 
const print = this.print || console.log; 
 
// Solution of the problem. zad15 Vowel to Length Ratio 100/100
 
let n = Number(gets()) // брой на ястията
let ratio = 1
let best_ratio = 1
let best_str = ''
let ctr = 0
let best_ctr = 0
let length_inp_l = 0
let best_length = 0
 
for (let i = 1; i <= n; i++) {
    let input_line = String(gets()) // конкретно ястие
 
    let ctr = 0 // брояч на гласните
    let length_inp_l = input_line.length // брой на буквите в конкретното ястие
 
    for (let j of input_line) {
 
        if (j == 'a' || j == 'o' || j == 'u' || j == 'e' || j == 'i'){
            ctr += 1
        }
    }
    ratio = ctr / length_inp_l // отношение на броя на гласните към броя на всички букви
     if (ratio < best_ratio) {
        best_ratio = ratio
        best_str = input_line
        best_ctr = ctr
        best_length = length_inp_l
    }  else if (ratio == best_ratio) {
        if (ctr > best_ctr) {
            best_ratio = ratio
            best_str = input_line
            best_ctr = ctr
            best_length = length_inp_l
 
        } else if (ctr == best_ctr){
            if (length_inp_l > best_length){
                best_ratio = ratio
                best_str = input_line
                best_ctr = ctr
                best_length = length_inp_l
            }
        }
    }
 
}
console.log(`${best_str} ${best_ctr}/${best_length}`)
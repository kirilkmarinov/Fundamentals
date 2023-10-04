// Write a function that stores students and their grades throughout the year. If a student appears more than once, add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.

// Example:
// Input	                Output
// ['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6']	            Lilly: 5.25
//                         Tammy: 3.00
//                         Tim: 5.75
// ['Steven 3 5 6 4',
// 'George 4 6',
// 'Tammy 2 5 3',
// 'Steven 6 3']	        George: 5.00
//                         Steven: 4.50
//                         Tammy: 3.33


function schoolGrades(input) {

    let map = new Map();

    for (el of input) {
        let tokens = el.split(' ');
        let name = tokens.shift(' ');
        let setOfGrades = tokens.map(Number);

        // let sumGrades = 0;
        // for (let i = 0; i < tokens.length; i++) {
        //     sumGrades = sumGrades + Number(tokens[i]);
        // }
        // let avrgGrade = sumGrades / (tokens.length);
        //console.log(name);
        //console.log(avrgGrade);
        if (!map.has(name)) {
            map.set(name, setOfGrades);
        } else {
            let oldSet = map.get(name);
            for(let grade of setOfGrades){
                oldSet.push(grade);
            }
            map.set(name, setOfGrades);
            // let newAvrg = (oldAvrg + avrgGrade) / 2
            // map.set(name, newAvrg);
        }
    }
    //console.log(map);
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(sorted);
    for (let [key, value] of sorted) {
        let sumGrade =0;
        for (grade of value) {
            sumGrade+=Number(grade);
        }
        let avrg = sumGrade / value.length
        console.log(`${key}: ${avrg.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
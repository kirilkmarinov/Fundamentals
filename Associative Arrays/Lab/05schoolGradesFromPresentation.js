function schoolGrades(input) {

    let map = new Map();

    for (let element of input) {
        let studentInfo = element.split(' ');
        //console.log(studentInfo);
        let name = studentInfo.shift();
        //console.log(name);
        let currentGrades = studentInfo.map(Number);
        // console.log(currentGrades);
        if (!map.has(name)) {
            map.set(name, []);
        }
        for (grade of currentGrades) {
            map.get(name).push(grade);
        }      
    }
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(sorted);
    for (let [key, value] of sorted) {
        let allGrade = value.map(Number);
        let sum=0;
        let avrg=0;
        //console.log(allGrade);
        for (let i = 0; i < allGrade.length; i++) {
            sum=sum+allGrade[i];
            avrg=sum/allGrade.length;
        }
        //console.log(avrg);
        console.log(`${key}: ${avrg.toFixed(2)}`);
    }   
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
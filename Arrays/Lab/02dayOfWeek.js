// Write a program, which receives a number and prints the corresponding name of the day of the week.  
// If the number is NOT a valid day, print: "Invalid day!".


function dayOfWeek(dayNumber) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (dayNumber < 1 || dayNumber > 7) {
        console.log(`Invalid day!`);
    } else {
        console.log(day[dayNumber - 1]);
    }
}
dayOfWeek([1]);
dayOfWeek([2]);
dayOfWeek([3]);
dayOfWeek([4]);
dayOfWeek([5]);
dayOfWeek([6]);
dayOfWeek([7]);
dayOfWeek([8]);
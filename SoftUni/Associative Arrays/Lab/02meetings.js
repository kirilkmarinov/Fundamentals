// Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings. 

// Example:
// Input	                Output
// ['Monday Peter',
//  'Wednesday Bill',
//  'Monday Tim',
//  'Friday Tim']	        Scheduled for Monday
//                          Scheduled for Wednesday
//                          Conflict on Monday!
//                          Scheduled for Friday
//                          Monday -> Peter
//                          Wednesday -> Bill
//                          Friday -> Tim
// ['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']	    Scheduled for Friday
//                          Scheduled for Saturday
//                          Scheduled for Monday
//                          Conflict on Monday!
//                          Scheduled for Wednesday
//                          Friday -> Bob
//                          Saturday -> Ted
//                          Monday -> Bill
//                          Wednesday -> George


function meetings(input) {

    let meetings = {};

    for (element of input) {
        let [day, name] = element.split(' ')
        //console.log(day, name);

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }        
    }

    for (let [key, value] of Object.entries(meetings)) {
        console.log(key, "->", value);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
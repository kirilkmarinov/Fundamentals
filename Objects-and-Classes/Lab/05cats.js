// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.

// Examples:
// Input	Output
// ['Mellow 2', 'Tom 5']	            Mellow, age 2 says Meow
//                                      Tom, age 5 says Meow

// ['Candy 1', 'Poppy 3', 'Nyx 2']	    Candy, age 1 says Meow
//                                      Poppy, age 3 says Meow
//                                      Nyx, age 2 says Meow


function cats(catsData) {

    class Cat {
        constructor(catName, age) {
            this.name = catName;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catData of catsData) {
        let taken = catData.split(' ');
        let catName = taken[0];
        let catAge = taken[1];

        let myCat = new Cat(catName, catAge);
        cats.push(myCat);
    }

    for (let myCat of cats) {
        myCat.meow();

    }
}
cats(['Mellow 2', 'Tom 5']);
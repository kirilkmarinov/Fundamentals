// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

// Examples:
// Input	                                            Output
// [
// 'addMovie Fast and Furious',
// 'addMovie Godfather',
// 'Inception directedBy Christopher Nolan',
// 'Godfather directedBy Francis Ford Coppola',
// 'Godfather onDate 29.07.2018',
// 'Fast and Furious onDate 30.07.2018',
// 'Batman onDate 01.08.2018',
// 'Fast and Furious directedBy Rob Cohen'
//                                                 ]	{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
//                                                     {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
// [
// 'addMovie The Avengers',
// 'addMovie Superman',
// 'The Avengers directedBy Anthony Russo',
// 'The Avengers onDate 30.07.2010',
// 'Captain America onDate 30.07.2010',
// 'Captain America directedBy Joe Russo'
// ]	                                                {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}


function movies(input) {

    let moviesArray = [];

    for (element of input) {
        if (element.includes('addMovie ')) {
            let movie = element.replace('addMovie ', '');

            moviesArray.push({ name: movie });

        } else if (element.includes('directedBy')) {
            let [name, director] = element.split(' directedBy ');
            moviesArray.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (element.includes('onDate')) {
            let [name, date] = element.split(' onDate ');
            moviesArray.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    }

    moviesArray.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
}

function getAllDirectorsUnique(movies) {
    return movies
        .map(movie => movie.director)
        .filter((director, i, movies) => {
            return movies.indexOf(director) === i;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesFiltered = movies.filter(movie => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    })

    return moviesFiltered.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) return 0;

    const totalScore = movies.reduce((acc, val) => {
        if (!val.score) return acc;

        return acc + val.score;
    }, 0);

    return Number((totalScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    return movies
        .slice()
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titlesSorted = movies
        .map(movie => movie.title)
        .sort((a, b) => a.localeCompare(b))
    
    return titlesSorted.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        let minutes = 0;
        let hoursInMinutes = 0;
        
        if (movie.duration.includes("m")) {
            minutes = Number(movie.duration.slice(movie.duration.indexOf(" ") + 1, movie.duration.indexOf("m")));
        }

        if (movie.duration.includes("h")) {
            hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60
        }
    
        return { ...movie, duration: minutes + hoursInMinutes };
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg (movies) {
    if (movies.length === 0) return null;
    
    const years = [...new Set(movies.map(movie => movie.year))];
    const scoresByYear = [];
    
    years.forEach(year => {
        scoresByYear.push({year, score: scoresAverage(movies.filter(movie => {
            return movie.year === year;
        }))});
    })
    
    scoresByYear.sort((a, b) => {
        return b.score - a.score || a.year - b.year;
    });
  
    const best = scoresByYear[0];

    return `The best year was ${best.year} with an average score of ${best.score}`;
}

const MovieRoster = (()=> {

    var count = 0;
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, year, director, genre, isComplete) => {
        var movie = MovieFactory(title, year, director, genre, isComplete, count++);
        roster.push(movie);
    }

    const deleteFromRoster = (find) => {
        for (var i = 0; i < roster.length; i++) {
            if (roster[i].id === find) {
                roster.splice(i,1);
            }
        }
    }

    return {getRoster, addToRoster, deleteFromRoster};
})();

const MovieFactory = (title, year, director, genre, isComplete, id) => {

    return {title, year, director, genre, isComplete, id};
}

export {MovieRoster};


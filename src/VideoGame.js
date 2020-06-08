const GameRoster = (()=> {

    var count = 0;
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, year, pub, genre, isComplete) => {
        var game = GameFactory(title, year, pub, genre, isComplete, count++);
        roster.push(game);
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

const GameFactory = (title, year, pub, genre, isComplete, id) => {

    return {title, year, pub, genre, isComplete, id};
}

export {GameRoster};


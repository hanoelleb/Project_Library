const PodcastRoster = (()=> {

    var count = 0;
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, date, host, genre, isComplete) => {
        var podcast = PodcastFactory(title, date, host, genre, isComplete, count++);
        roster.push(podcast);
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

const PodcastFactory = (title, date, host, genre, isComplete, id) => {

    return {title, date, host, genre, isComplete, id};
}

export {PodcastRoster};


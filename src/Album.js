//{ label: 'Music', headers: ['Title', 'Year Released', 'Artist', 'Album', 'Genre'] },

const AlbumRoster = (()=> {

    var count = 0;
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, year, artist, genre, isComplete) => {
        var album = AlbumFactory(title, year, artist, genre, isComplete, count++);
        roster.push(album);
    }

    const deleteFromRoster = (find) => {
        console.log('deleting album: ' + find);
        for (var i = 0; i < roster.length; i++) {
            if (roster[i].id === find) {
                roster.splice(i,1);
            }
        }
    }

    return {getRoster, addToRoster, deleteFromRoster};
})();

const AlbumFactory = (title, year, artist, genre, isComplete, id) => {

    return {title, year, artist, genre, isComplete, id};
}

export {AlbumRoster};


/*
    { label: 'Books', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
    { label: 'Music', headers: ['Title', 'Year Released', 'Artist', 'Album', 'Genre'] },
    { label: 'Podcasts', headers: ['Title', 'Date', 'Host', 'Genre', 'Completed'] },
    { label: 'Movies', headers: ['Title', 'Year Released', 'Director', 'Genre', 'Completed'] },
    { label: 'Video Games', headers: ['Title', 'Year Published', 'Publisher', 'Genre', 'Completed'] },
*/

const BookRoster = (()=> {
 
    var count = 0;
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, year, author, pageNum, isComplete) => {
        console.log('title: ' + title + ' author: ' + author);
        var book = BookFactory(title, year, author, pageNum, isComplete, count++);
        roster.push(book);
	console.log('roster after push: ' + roster);
    }

    const deleteFromRoster = (find) => {
        console.log('deleting book: ' + find);
        for (var i = 0; i < roster.length; i++) {
            if (roster[i].id === find) {
                roster.splice(i,1);
	    }
	}
    }

    return {getRoster, addToRoster, deleteFromRoster};
})();

const BookFactory = (title, year, author, pageNum, isComplete, id) => {
    
    return {title, year, author, pageNum, isComplete, id};
}

export {BookRoster};

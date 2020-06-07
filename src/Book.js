/*
    { label: 'Books', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
    { label: 'Music', headers: ['Title', 'Year Released', 'Artist', 'Album', 'Genre'] },
    { label: 'Podcasts', headers: ['Title', 'Date', 'Host', 'Genre', 'Completed'] },
    { label: 'Movies', headers: ['Title', 'Year Released', 'Director', 'Genre', 'Completed'] },
    { label: 'Video Games', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
*/

const BookRoster = (()=> {
    var roster = [];

    const getRoster = () => {return roster};

    const addToRoster = (title, year, author, pageNum, isComplete) => {
        console.log('title: ' + title + ' author: ' + author);
        var book = BookFactory(title, year, author, pageNum, isComplete );
        roster.push(book);
	console.log('roster after push: ' + roster);
    }

    return {getRoster, addToRoster};
})();

const BookFactory = (title, year, author, pageNum, isComplete) => {
    
    return {title, year, author, pageNum, isComplete};
}

export {BookRoster};

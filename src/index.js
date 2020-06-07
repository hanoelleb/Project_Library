import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BookRoster} from './Book.js';

class MediaTable extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handler = this.handler.bind(this);
        this.state = {addingNew: false};
    }

    handleAddClick() {
         this.setState({addingNew: true});
    }

    handleSwitch(id) {
         switch(id) {
             case 0:
             var roster = BookRoster.getRoster();
             return roster.map( book => this.addRow(book));
             break;
         default:
             break;
        }
    }

    addRow(entry) {
        return <MediaRow key={entry.title} obj = {entry} handler={this.handler} col0={entry.title} col1={entry.year} 
	    col2={entry.author} col3={entry.pageNum} col4={entry.isComplete}/>;
    }

    handler() {
        this.setState({addingNew: false});
    }

    render() {
        const id = this.props.id;
        const tableLabel = this.props.label;
        const tableHeaders = this.props.headers;
        const addingNew = this.state.addingNew;
        return (
            <div>
                <h2>{tableLabel}</h2>
	        <table>
                    <thead>
		        <tr>
                            {tableHeaders.map(header => ( 
                                <th key={header}>{header}</th>
                            ))}
		        </tr>
                    </thead>
		    <tbody>
                        {this.handleSwitch(id)}
                    </tbody>
		</table>
	        {!addingNew ? 	
		    <button onClick={this.handleAddClick}>Add {tableLabel}</button>
                    :
                    <MediaForm id={id} handler ={this.handler} headers={tableHeaders}/>
                }
           </div>
	);
    }
}

class MediaForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
	this.handleCheck = this.handleCheck.bind(this);
	this.submitForm = this.submitForm.bind(this);
        this.state = ({id: this.props.id, field0: '', field1: '', field2: '', field3: '', isComplete: false});
    }

    renderField(header, index, len) {
	if (index < len-1) {
        return (
            <div key={header}>
                <label>{header}</label>
                <input type='text' id={index} onChange={this.handleChange}></input>
            </div>
        )
	}
    }

    handleChange(event) {
        const changed = (event.target.id);
	this.setState({ ['field'+changed]: event.target.value });
    }

    handleCheck(event) {
        this.setState({isComplete: event.target.checked});
	alert(event.target.checked);
    }

    submitForm(event) {
        const id = this.props.id;
        switch(id) {
	//0 = Book
	//1 = Album
        //2 = Podcast
        //3 = Movies
        //4 = Video Games
            case 0:
                BookRoster.addToRoster(this.state.field0, this.state.field1, this.state.field2, this.state.field3, this.state.isComplete);
                this.props.handler();
                break;
            default:
                break;
	}
        event.preventDefault();
    }

    render() {
        const id = this.props.id;
        const headers = this.props.headers;
        return (
            <form onSubmit={this.submitForm}>
		{headers.map( (header, index) => this.renderField(header, index, headers.length))}
		<input type='checkbox' value='complete' onChange={this.handleCheck} checked={this.state.isComplete}></input>
		<label>Completed</label>
		<input type='submit' value='Add'></input>
            </form>
	)
    }
}

class MediaRow extends React.Component {

    constructor (props) {
        super(props);
        this.setComplete = this.setComplete.bind(this);
    }

    setComplete() {
        this.props.obj.isComplete = !this.props.col4;
        this.props.handler();
    }

    render() {
        const obj = this.props.obj;
        const col0 = this.props.col0;
        console.log('col0: ' + col0);
        const col1 = this.props.col1;
        const col2 = this.props.col2;
        const col3 = this.props.col3;
        const col4 = this.props.col4;
        console.log('col4: ' + col4);
        return (
             <tr>
                 <td>{col0}</td>
                 <td>{col1}</td>
                 <td>{col2}</td>
                 <td>{col3}</td>
                 {col4 ? <td onClick={this.setComplete}>Yes</td> : <td onClick={this.setComplete}>No</td>}
             </tr>
        );
    };
}

const CATEGORIES = [
    { id: 0, label: 'Books', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
    { id: 1, label: 'Albums', headers: ['Title', 'Year Released', 'Artist', 'Genre', 'Completed'] },
    { id: 2, label: 'Podcasts', headers: ['Title', 'Date', 'Host', 'Genre', 'Completed'] },
    { id: 3, label: 'Movies', headers: ['Title', 'Year Released', 'Director', 'Genre', 'Completed'] },
    { id: 4, label: 'Video Games', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
]

class Library extends React.Component {
    renderTable(info) {
        return <MediaTable key={info.id} id={info.id} label={info.label} headers={info.headers}/>;
    }
    render() {
        return (
          <div>
	    { CATEGORIES.map( category => this.renderTable(category) )}
          </div>
	);
    };
}

console.log('roster: ' + BookRoster.getRoster());

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);


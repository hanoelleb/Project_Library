import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MediaTable extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = {addingNew: false};
    }

    handleAddClick() {
         this.setState({addingNew: true});
    }

    render() {
        const tableLabel = this.props.label;
        const tableHeaders = this.props.headers;
        const addingNew = this.state.addingNew;
        return (
            <div>
                <h1>{tableLabel}</h1>
	        <table>
                    <thead>
		        <tr>
                            {tableHeaders.map(header => ( 
                                <th key={header}>{header}</th>
                            ))}
		        </tr>
                    </thead>
		</table>
	        {!addingNew ? 	
		    <button onClick={this.handleAddClick}>Add {tableLabel}</button>
                    :
                    <MediaForm headers={tableHeaders}/>
                }
           </div>
	);
    }
}

class MediaForm extends React.Component {
    renderField(header) {
        return (
            <div key={header}>
                <label>{header}</label>
                <input type='text'></input>
            </div>
        )
    }

    render() {
        const headers = this.props.headers;
        return (
            <form>
		{headers.map(header => this.renderField(header))};
		<button>Add</button>
            </form>
	)
    }
}

/*class MediaRow extends React.Component {
    render() {
        return (
             <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
             </tr>
        );
    };
}*/


const CATEGORIES = [
    { label: 'Books', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
    { label: 'Music', headers: ['Title', 'Year Released', 'Artist', 'Album', 'Genre'] },
    { label: 'Podcasts', headers: ['Title', 'Date', 'Host', 'Genre', 'Completed'] },
    { label: 'Movies', headers: ['Title', 'Year Released', 'Director', 'Genre', 'Completed'] },
    { label: 'Video Games', headers: ['Title', 'Year Published', 'Author', 'No. of Pages', 'Completed'] },
]

class Library extends React.Component {
    renderTable(info) {
        return <MediaTable key={info.label} label={info.label} headers={info.headers}/>;
    }
    render() {
        return (
          <div>
	    { CATEGORIES.map( category => this.renderTable(category) )}
          </div>
	);
    };
}

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);


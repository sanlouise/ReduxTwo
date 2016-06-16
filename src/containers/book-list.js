//The most parent component that cares about a specific kind of state should be in a container and connected to Redux.
//Containers are the link between Redux and React. All done via mapStateToProps.
//App.js does not really care about the list of books, only book-list. Book detail only cares about the active book.
//App.js should be a 'dumb' component, no handle on the data contained in Redux.
//Just read 'state' as being 'entire data model'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return {
				<li key={book.title} className="list-group-item">{book.title}</li>
			};
		});
	}
	render () {
		return (
			<ul className ="list-group col-sm-4"
				{this.renderList()}
			</ul>
		)
	}
}

// Take appliction state as arguments, book and active book.
// Whatever is returned will show up as props inside of booklist.
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//Always - in container files - export at the very end to export the entire container and not individual parts.
export default connect(mapStateToProps)(BookList);
//The most parent component that cares about a specific kind of state should be in a container and connected to Redux.
//Containers are the link between Redux and React. All done via mapStateToProps.
//App.js does not really care about the list of books, only book-list. Book detail only cares about the active book.
//App.js should be a 'dumb' component, no handle on the data contained in Redux.
//Just read 'state' as being 'entire data model'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
		<li key={book.title}
			onClick={() => this.props.selectBook(book)}
			className= "list-group-item">
			{book.title}
		</li>
			);
		});
	}
	render () {
		return (
			<ul className ="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//This function is the glue between React and Redux!
//Whenever application state changes, such as when books take a while to load or when a user clicks a book
//and that changes the list etc. this container (our book-list) will instantly re-render with a new list of books.
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//Anything returned from this function ends up as props on bookList (this.props.selectBook) - the first 'selectBook' is the magical word here.
//Whenever selectBook is called, results is passed (dispatched) to all reducers. Dispatch is this funnel.
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Always - in container files - export at the very end to export the entire container and not individual parts.
//Connect takes a function and a component and produces a container.
//Ensure that BookList knows about the new selectBook method, make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
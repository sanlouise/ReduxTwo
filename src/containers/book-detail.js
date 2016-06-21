import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		//If we don't check this, ook active book reducer will throw an error because 
		//it does not know what to do with an empty state
		if (!this.props.book) {
			return <div>Please select a book</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

//activeBook is referenced in reducers.index.js 
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
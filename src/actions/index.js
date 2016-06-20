export function selectBook(book) {

	//selectBook is an actionCreator that returns a type and payload.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
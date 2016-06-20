
//State argument is not application state, only state this reducer is responsible for
//Null is to ensure that when no information is passed along, undefined cannot be returned
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
		return action.payload
	}
	return state
}
// making todos, which will be an array [], and passing in an action as action.
const todos = (state = [], action) => {
  switch( action.type ) {
    case 'ADD_TODO':
    // when user adds a new todo, app will pass:
    // {Type: 'ADD_TODO', todo: 'Buy Milk'}
      // return the new item(, ...)in front of all previous items
      return [action.todo, ...state]
    // otherwise simply return the current state
    default:
      return state;  
    }
}

export default todos;
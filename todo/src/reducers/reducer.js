export const initialState = 
[
  // {
  //   todo: 'a todo',
  //   completed: false,
  //   id: 1
  // }, 
  // {
  //   todo: '2 a todo',
  //   completed: false,
  //   id: 2
  // }, 
];

export function reducer(state, action) {
  switch (action.type) { // Action is an object
    case 'ADD_TODO':
      return [
        ...state,
          {
            todo: action.payload,
            completed: false,
            id: Date.now()
          },
        ];
        case 'TOGGLE_COMPLETED':
        console.log("action object:", action, 'state:', state)
        return  state.map(item => {
                    if(action.payload === item.id){
                      item.completed = !item.completed
                    }  
                    return item
                  })
    default:
      return state;
  }
}
// Don't need to use the spread because map makes a new array. 

// action is and object that contains dispatch with a type and payload key value pairs. 
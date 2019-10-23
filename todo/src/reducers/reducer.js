export const initialState = 
[
  
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
          return [
            ...state, 
            {
              completed: !state.completed,
            }
          ]
    default:
      return state;
  }
}

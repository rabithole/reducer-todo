export const initialState = 
[
  {
    todo: "Add To Do's",
    completed: false,
    id: Date.now()
  }
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
    default:
      return state;
  }
}

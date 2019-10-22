export const initialState = 
[
  {
    input: 'New To Do',
    item: "Add To Do's",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) { // Action is an object
    case 'ADD_TODO':
      return [
        ...state,
          {
            input: 'New To Do',
            item: action.payload,
            completed: false,
            id: new Date()
          },
        ];
    default:
      return state;
  }
}

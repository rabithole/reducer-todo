export const initialState = {
  item: 'Something about reduction',
  completed: false,
  id: 3892987589
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: new Date()
      };
    default:
      return state;
  }
}

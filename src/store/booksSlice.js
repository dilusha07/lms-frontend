import { createSlice } from '@reduxjs/toolkit';


export const bookSlice = createSlice({
    name: 'books',
    initialState: {
      value: null,
    },
    reducers: {
        setBooks: (state, action) => {
            state.value = action.payload;

        },
        updateBook: (state, action) => {
          const updateBooks = [...state.value];
          const id = action.payload.id;
          const index = updateBooks.findIndex(
            (element) => element.id == id
          );
          updateBooks.splice(index, 1, action.payload);
          state.value = updateBooks;
        },
    },
  });
  
  export const { setBooks, updateBook } = bookSlice.actions

export default bookSlice.reducer
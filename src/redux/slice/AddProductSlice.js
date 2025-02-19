import {createSlice} from '@reduxjs/toolkit';

export const AddProductSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const {addProducts} = AddProductSlice.actions;
export default AddProductSlice.reducer;

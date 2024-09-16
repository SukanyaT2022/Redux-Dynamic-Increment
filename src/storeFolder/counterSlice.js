import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        if (state.value < 5) {
            state.value++;
        }
    //   state.value += 1
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value--;
        }
    //   state.value -= 1

    },
   add5Func: (state,val) => {
      state.value += val.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, add5Func } = counterSlice.actions

export default counterSlice.reducer
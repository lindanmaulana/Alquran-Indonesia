import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    new: []
}

const FeatureBaruDibaca = createSlice({
    name: "Feature baru dibaca",
    initialState,
    reducers: {
        handleBaruDibaca: (state, action) => {
            if(state.new.length === 0) {
                state.new.push(action.payload)
            } else {
                state.new = [...state.new, action.payload]
            }
        }
    }
})

export const {handleBaruDibaca} = FeatureBaruDibaca.actions
export default FeatureBaruDibaca.reducer
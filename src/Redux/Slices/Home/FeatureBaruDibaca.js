import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    new: [],
    baruDibaca: true,
    penanda: false
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
        },

        handleRouteBaruDibaca: (state, action) => {
            state.baruDibaca = action.payload
            state.penanda = false
        },

        handleRoutePenanda: (state, action) => {
            state.penanda = action.payload
            state.baruDibaca = false
        }
    }
})

export const {handleBaruDibaca, handleRouteBaruDibaca, handleRoutePenanda} = FeatureBaruDibaca.actions
export default FeatureBaruDibaca.reducer
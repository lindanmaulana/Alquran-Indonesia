import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    reverse: false
}

const DataSurah = createSlice({
    name: "Data Surah",
    initialState,
    reducers: {
        handleData: (state, action) => {
            state.data = action.payload
        },

        handleReverse: (state, action) => {
            state.reverse = action.payload
        }
    }
})

export const {handleData, handleReverse} = DataSurah.actions
export default DataSurah.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const FeatureDataSurahLengkap = createSlice({
    name: "Data Surah Lengkap",
    initialState,
    reducers: {
        handleDataSurahLengkap: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {handleDataSurahLengkap} = FeatureDataSurahLengkap.actions
export default FeatureDataSurahLengkap.reducer
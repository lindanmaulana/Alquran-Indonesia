import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    terjemahan: true,
    membaca: false
}

const FeatureMainContent = createSlice({
    name: "Feature Main Content",
    initialState,
    reducers: {
        handleTerjemahan: (state, action) => {
            state.terjemahan = action.payload
            state.membaca = false
        },
        handleMembaca: (state, action) => {
            state.membaca = action.payload
            state.terjemahan = false
        }
    }
})

export const {handleTerjemahan, handleMembaca} = FeatureMainContent.actions
export default FeatureMainContent.reducer
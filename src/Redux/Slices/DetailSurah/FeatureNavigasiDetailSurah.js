import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    condition: false,
    inRoute: null
}

const FeatureNavigasiDetailSurah = createSlice({
    name: "Feature Navigasi",
    initialState,
    reducers: {
        handleNavigasi: (state, action) => {
            state.condition = action.payload
        },

        handleInRoute: (state, action) => {
            state.inRoute = action.payload
        }
    }
})

export const {handleNavigasi, handleInRoute} = FeatureNavigasiDetailSurah.actions
export default FeatureNavigasiDetailSurah.reducer
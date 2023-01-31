import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../feautures/loading/loadingSlice'
import cakeReducer from '../feautures/cake/cakeSlice'

const store=configureStore({
    reducer:{
        loading:loadingReducer,
        cake: cakeReducer,
    }
})

export default store
import {configureStore} from '@reduxjs/toolkit'
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import { DealsFromServerSlice } from './deals_from_server_slice'
const store = configureStore(
    {
        reducer:{
            DealsFromServerReducer: DealsFromServerSlice.reducer
        },
        devTools:true
    }
)

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

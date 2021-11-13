import {configureStore} from '@reduxjs/toolkit'
import {searchResultsSlice} from './searchResultsSlice'
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'

const store = configureStore(
    {
        reducer:{
            searchResults: searchResultsSlice.reducer
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
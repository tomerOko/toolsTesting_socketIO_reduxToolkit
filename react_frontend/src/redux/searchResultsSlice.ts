import {createSlice , PayloadAction} from '@reduxjs/toolkit'
import {IAccommodationInSessionStorage} from '../interfaces/SearchResult'
import {ISearchEngine} from '../interfaces/searchEngine'
import {ISearchQuery} from '../interfaces/seqrchQuery'

export interface IStore {
    
    /**
     * the present query
     */
    query : ISearchQuery,
    /**
     * all the results being loaded in
     */
    results : IAccommodationInSessionStorage[]
}

const initialState : IStore = {
    query : {
        ski_site: 1,
        from_date: "03/04/2022",
        to_date: "03/11/2022",
        group_size:4
    },
    results : [],
}

const searchResultsSlice = createSlice({
    name : "results", // ??
    initialState,
    reducers: {
        setQuery: (state, action : PayloadAction<ISearchQuery>) =>{
            state.query = action.payload
        },
        setResults : (state, action : PayloadAction<IAccommodationInSessionStorage[]>) =>{
            state.results = action.payload
        },        
        addResults : (state, action : PayloadAction<IAccommodationInSessionStorage[]>) =>{
            state.results = action.payload.concat(state.results)
            // [...state.results, ...action.payload]
        },
    }
})

export const {setQuery, setResults, addResults} = searchResultsSlice.actions
export {searchResultsSlice}
import {createSlice , PayloadAction} from '@reduxjs/toolkit'
import {IAccommodationAsDeal} from '../types/interfaces/search_vication_packages.types'

export interface IDealsFromServerState {
    
    /**
     * the avialble result for each search 
     */
     accommodations: IAccommodationAsDeal[]
}

const initialState :  IDealsFromServerState= {
    accommodations:[]
}

const DealsFromServerSlice = createSlice({
    name : "deals from server", // A string name for this slice of state. Generated action type constants will use this as a prefix.(toolkit docs)
    initialState,
    reducers: {
        setAccommodations: (state:IDealsFromServerState, action : PayloadAction<IAccommodationAsDeal[]>) =>{
            state.accommodations = action.payload
        },
        addAccommodations : (state : IDealsFromServerState, action : PayloadAction<IAccommodationAsDeal[]>) =>{
            state.accommodations = [...action.payload, ...state.accommodations]
        },        
        clearAccommodations : (state : IDealsFromServerState, action : PayloadAction<string>) =>{
            console.log(action.payload)
            state.accommodations = []
        },
        filterAccommodations : (state : IDealsFromServerState, action : PayloadAction<IAccommodationAsDeal>) =>{
            state.accommodations = state.accommodations.filter(deal => deal.Id!=action.payload.Id)
        },
    }
})

export const {setAccommodations, addAccommodations, clearAccommodations , filterAccommodations} = DealsFromServerSlice.actions
export {DealsFromServerSlice}
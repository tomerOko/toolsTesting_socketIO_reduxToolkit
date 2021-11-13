import {createSlice , PayloadAction} from '@reduxjs/toolkit'

export interface IExampleStoreState {
    
    /**
     * comment about 
     */
    name : string,
    /**
     * comment about age
     */
    age : number 
}

const initialState : IExampleStoreState = {
    name : 'tomer',
    age: 29

}

const ExampleSlice = createSlice({
    name : "example", // A string name for this slice of state. Generated action type constants will use this as a prefix.(toolkit docs)
    initialState,
    reducers: {
        setName: (state:IExampleStoreState, action : PayloadAction<string>) =>{
            state.name = action.payload
        },
        setAge : (state : IExampleStoreState, action : PayloadAction<number>) =>{
            state.age = action.payload
        },        
        increaseAge : (state : IExampleStoreState, action : PayloadAction<number>) =>{
            state.age = state.age + action.payload
        },
    }
})

export const {setName, setAge, increaseAge} = ExampleSlice.actions
export {ExampleSlice}
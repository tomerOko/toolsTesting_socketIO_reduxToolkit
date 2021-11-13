import React, {useEffect, useState} from "react";
import { Fragment } from "react";


interface ImyData{
    name:string,
    age: number,
}

const socketEndToEndTestComponent = (props:any) => {

    //hooks here
    const [myData, setMyData] = useState<ImyData>({name:"", age : 10})

    //life cycle hooks here
    useEffect(() => {

        console.log("pro loading")
        
        return () => 
        {
            console.log("romved from dom")
        }

    }, [/*inputs here*/])

    //logic can also be here
    const setName = (name:string) => {
        setMyData({name:name, age:myData.age})
    }

    const setAge = (age:string) => {
        const ageAsNumebr = Number(age)
        ageAsNumebr?setMyData({name:myData.name, age:ageAsNumebr}):console.log("cant cange age, input wasent a number")
    }

    const socket = new WebSocket('ws://localhost/websockets/')
    // const socket = new WebSocket('ws://localhost:3001')
    socket.onmessage = ({data}) => {
        console.log('message from server' )
        console.log(data)
    }

    const connectToSocket = () => {
        socket.send('hallow')
    }
    
    //the final tsx component here
    return(
        <Fragment>
            <button onClick={()=>{connectToSocket()}}>click me</button>
            the dude names {myData.name} hes {myData.age} years old
            <input type="text" onChange={ e => setName(e.target.value)}></input>
            <input type="number" onChange={ e => setAge(e.target.value)}></input>
        </Fragment>
    )
}

export default socketEndToEndTestComponent 
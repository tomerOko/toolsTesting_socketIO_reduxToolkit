 import WebSockett from 'ws'
 const socketServer = new WebSockett.Server({port: 3001})
 import axios, { AxiosResponse } from "axios";
import { IResposeBody } from './types/interfaces/search_vication_package.types';

 
 socketServer.on('connection' , socket => {
   socket.on('message', message =>{
    axios.post<IResposeBody>("https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator", queryAsSring )
    .then((response: AxiosResponse) => {
        console.log((response.data  as IResposeBody).body.accommodations)
        socket.send(JSON.stringify((response.data  as IResposeBody).body.accommodations))
    }); 
   })
 })



const query ={
    query: { 
    ski_site: 1, 
    from_date: "03/04/2022", 
    to_date: "03/11/2022", 
    group_size: 4 
    } 
}

const queryAsSring = JSON.stringify(query)



 const mockResults = (socket: WebSocket, message:WebSockett.RawData) => {
    let i=0
    const interval = setInterval(()=>{
      i++
     if(i>5) clearInterval(interval)
     console.log(message.toString())
     socket.send('hey')
    },2000)
 }

//  const dataToPush :IAccommodationInSessionStorage[] = [];
//  (response.data as ISearchResult).body.accommodations.map(x => {
//      dataToPush.push(Object.assign({engineId:searchEngine.engineId}, x))
//  })
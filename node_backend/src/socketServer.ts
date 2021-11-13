import WebSockett from 'ws'
const socketServer = new WebSockett.Server({port: 3001})
import axios, { AxiosResponse } from "axios";
import { IResposeBody, IRequestBody, IQuery, ISearchEngine } from './types/interfaces/search_vication_package.types';
import {searchEngines} from './config/searchEngines'
 
socketServer.on('connection' , socket => {
   
    socket.on('message', message =>{
        
        const requestBody :IRequestBody = JSON.parse(message.toString())
        const query = requestBody.query
        searchEngines.forEach(searchEngine => { // imitates multiple search engines
            for (let additinalGuest = 0; additinalGuest<3; additinalGuest++){
                setTimeout(() => {
                    makeSingleRequestToEngine(query, additinalGuest, searchEngine, socket)
                }, Math.random() * 5 * 1000); // imitates diffrent response times
            }
        }) 
    })
 })


 const makeSingleRequestToEngine = (query : IQuery, additinalGuest: number, searchEngine : ISearchEngine, socket: WebSockett) => {
    query.group_size+=additinalGuest
    const newRequestBody : string = JSON.stringify({query:query})
    axios.post<IResposeBody>(searchEngine.engineUrl, newRequestBody )
    .then((response: AxiosResponse) => {
        console.log(response.data)
        socket.send(JSON.stringify((response.data  as IResposeBody).body.accommodations))
    });
 }


 const mockResults = (socket: WebSocket, message:WebSockett.RawData) => {
    let i=0
    const interval = setInterval(()=>{
      i++
     if(i>5) clearInterval(interval)
     console.log(message.toString())
     socket.send('hey')
    },2000)
 }

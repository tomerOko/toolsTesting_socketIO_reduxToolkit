import WebSockett from 'ws'
import axios, { AxiosResponse } from "axios";
import { IQuery, ISearchEngine, IQueryRequestBody, ISuccessfulBodyOfSearchVicationPackages } from './types/interfaces/search_vication_packages.types';
import {searchEngines} from './config/searchEngines'
import { validateIQueryRequestBody, validateISuccessfulBodyOfSearchVicationPackages } from './config/search_vication_packages.validators';

const socketServer = new WebSockett.Server({ noServer: true })
 
socketServer.on('connection' , socket => {
    socket.on('message', message =>{ // right now there is only one type of messages being send to the server so insted of routes and controllers i just proccess the message directly 
        const requestBody : IQueryRequestBody = JSON.parse(message.toString())
        if(!validateIQueryRequestBody(requestBody)){ 
            socket.send(JSON.stringify(validateIQueryRequestBody.errors))
        }else{
            proccessValidQuery(requestBody, socket) 
        }
    })
 })

const proccessValidQuery = (requestBody: IQueryRequestBody , socket: WebSockett) => {
    const query = requestBody.query
    searchEngines.forEach(searchEngine => { // imitates multiple search engines
        for (let additinalGuest = 0; additinalGuest<3; additinalGuest++){
            setTimeout(() => {
                makeSingleRequestToEngine(query, additinalGuest, searchEngine, socket)
            }, Math.random() * 5 * 1000); // imitates diffrent response times
        }
    })   
}

const makeSingleRequestToEngine = (query : IQuery, additinalGuest: number, searchEngine : ISearchEngine, socket: WebSockett) => {
    query.group_size+=additinalGuest
    const newRequestBody : string = JSON.stringify({query:query})
    axios.post<ISuccessfulBodyOfSearchVicationPackages>(searchEngine.engineUrl, newRequestBody )
    .then((response: AxiosResponse) => {
        if(!validateISuccessfulBodyOfSearchVicationPackages(response.data)){
            socket.send(JSON.stringify(validateISuccessfulBodyOfSearchVicationPackages.errors))
        }else{
            socket.send(JSON.stringify((response.data  as ISuccessfulBodyOfSearchVicationPackages).body.accommodations))
        }        
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

 export {socketServer}
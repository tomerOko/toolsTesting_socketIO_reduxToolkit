import * as React from 'react';
import {addAccommodations, clearAccommodations} from '../../redux/deals_from_server_slice'
import { useAppDispatch } from '../../redux/store';
import { IAccommodationAsDeal } from '../../types/interfaces/search_vication_packages.types';
import { v4 } from 'uuid';
import { validateIAccommodations } from '../../search_vication_packages.validators';
import { Link } from 'react-router-dom';
import "./material_form_component.css"
import { isThisQuarter } from 'date-fns';

const MaterialFormComponent = (props: any) => {

  const dispach = useAppDispatch()
//.toLocaleString().slice(0,10)

  const handleFromDateChange = (newValue: string) => {if(newValue)query.query.from_date=fromatDate(newValue)};
  const handleToDateChange = (newValue: string) => {if(newValue)query.query.to_date=fromatDate(newValue)};
  const handleSkiSiteChange = (value:string) => {if(value)query.query.ski_site=Number(value)};
  const handleGroupSizeChange = (value:string) => {if(value)query.query.group_size=Number(value)};
  
  const fromatDate=(date:string)=>{
    const splited =date.split('-')
    return splited[2]+"/"+splited[1]+"/"+splited[0]
  }

  const socket = new WebSocket('ws://localhost/sockets/') // the address here is determined by the nginx location's path
  socket.onmessage = ({data}) => {
    timeLogger()
    const parsedData = JSON.parse(data)
    if(validateIAccommodations(parsedData)){
      const newAccomodations : IAccommodationAsDeal[] = parsedData as IAccommodationAsDeal[]
      newAccomodations.map((hotelAsDeal => hotelAsDeal.Id=v4()));
      dispach(addAccommodations(newAccomodations))
    }
    else{
      console.log(validateIAccommodations.errors)
    } 
  }

  const timeLogger = () => {
    const thisSecond = new Date()
    console.log('message from server '+thisSecond.toLocaleString()," ",thisSecond.getSeconds())
  }

  const query = {
    query:{
      ski_site: 1, 
      from_date: new Date().toLocaleString().slice(0,10), 
      to_date: new Date().toLocaleString().slice(0,10), 
      group_size: 2 
    }
  }

  const startServerSearch = () => {
    console.log("hallow")
    dispach(clearAccommodations(""))
    console.log(query)
    const queryAsString = JSON.stringify(query)
      socket.send(queryAsString)
  }

  var curr = new Date();
  var date = curr.toISOString().substr(0,10);

  return (
    <React.Fragment>

            <div className="formContainer">
              <div id="wiskiLogoText">
               
              </div>
              <div id="logoImage">
              </div>
              
              <select name="skiSite" id="skiSite" className="input1" defaultValue="1" onChange={(e)=>{handleSkiSiteChange(e.target.value)}} >
                <option value={1}>Whistler Blackcomb</option>
                <option value={2}>Courchevel</option>
                <option value={3}>Zermatt</option>
              </select>
              
              <select name="groupSize"  id="groupSize" className="input2" defaultValue="1" onChange={(e)=>{handleGroupSizeChange(e.target.value)}} >
                <option value={1}>sigle surfer</option>
                <option value={2}>couple</option>
                <option value={3}>3 musketeers</option>
                <option value={4}>4 people</option>
                <option value={5}>5 people</option>
                <option value={6}>6 people</option>
                <option value={7}>7 people</option>
                <option value={8}>8 people</option>
              </select>


              <div className="input3" >
                <input type="date" id="fromDate" className="justTextInput"
                onChange={(e)=>{handleFromDateChange(e.target.value)}}
                name="fromDate" defaultValue={date} min={date} />
                <span>-</span>
                <input type="date" id="toDate" className="justTextInput"
                onChange={(e)=>{handleToDateChange(e.target.value)}}
                name="fromDate" defaultValue={date} min={date} />
              </div>
             
              <div id="submit" className="input4" onClick={()=>{startServerSearch()}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" style={{margin:"0 auto"}} viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
            </div>
 
    </React.Fragment>
  );
}

export {MaterialFormComponent}


             
{/* 
              <Select  className="input1" id="skisite" label="ski site" variant="outlined"  value={skiSite} onChange={(e)=>{handleSkiSiteChange(e.target.value)}}>
                <MenuItem value={1}>Whistler Blackcomb</MenuItem>
                <MenuItem value={2}>Courchevel</MenuItem>
                <MenuItem value={3}>Zermatt</MenuItem>
              </Select>

              <DesktopDatePicker className="input2" 
                label="Flight Date"
                inputFormat="MM/dd/yyyy"
                value={fromDate}
                onChange={handleFromDateChange}
                renderInput={(params) => <TextField {...params} />}
              />

              <DesktopDatePicker className="input3" 
                label="Return Date"
                inputFormat="MM/dd/yyyy"
                value={toDate}
                onChange={handleToDateChange}
                renderInput={(params) => <TextField {...params} />}
              />

              <TextField className="input4" id="groupSize" label="gang size" value={groupSize} variant="outlined" type="number" onChange={(e) => handleGroupSizeChange(e.target.value)} InputLabelProps={{shrink: true, }} />

              <Button className="formsButton input5" component={Link} to="/search_result" onClick={()=> startServerSearch()}>search</Button> */}

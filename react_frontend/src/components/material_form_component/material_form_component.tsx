import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';

const MaterialFormComponent = (props: any) => {

  const [fromDate, setFromDate] = React.useState<Date>(new Date())    
  const [toDate, setToDate] = React.useState<Date>(new Date())    
  const [skiSite, setSkiSite] = React.useState<string>("1")
  const [groupSize, setGroupSize] = React.useState<string>("1")

  const handleFromDateChange = (newValue: Date | null) => {if(newValue)setFromDate(newValue)};
  const handleToDateChange = (newValue: Date | null) => {if(newValue)setToDate(newValue)};
  const handleSkiSiteChange = (value:string) => {if(value)setSkiSite(value)};
  const handleGroupSizeChange = (value:string) => {if(value)setGroupSize(value)};
  
  const socket = new WebSocket('ws://localhost/websockets/')
  socket.onmessage = ({data}) => {
      console.log('message from server' )
      const thisSecond = new Date()
      console.log(thisSecond.toLocaleString()," ",thisSecond.getSeconds())
      console.log(data)
  }

  const connectToSocket = () => {
    
    const query = {
      query:{
        ski_site: Number(skiSite), 
        from_date: fromDate.toLocaleString().slice(0,10), 
        to_date: toDate.toLocaleString().slice(0,10), 
        group_size: Number(groupSize) 
      }
    }
    
    const queryAsString = JSON.stringify(query)
      socket.send(queryAsString)
  }

  return (
    <React.Fragment>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
    
        <Select  id="skisite" label="ski site" variant="outlined"  value={skiSite} onChange={(e)=>{handleSkiSiteChange(e.target.value)}}>
          <MenuItem value={1}>Whistler Blackcomb</MenuItem>
          <MenuItem value={2}>Courchevel</MenuItem>
          <MenuItem value={3}>Zermatt</MenuItem>
        </Select>

          <DesktopDatePicker
            label="Flight Date"
            inputFormat="MM/dd/yyyy"
            value={fromDate}
            onChange={handleFromDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Return Date"
            inputFormat="MM/dd/yyyy"
            value={toDate}
            onChange={handleToDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        
        <TextField id="groupSize" label="gang size" value={groupSize} variant="outlined" type="number" onChange={(e) => handleGroupSizeChange(e.target.value)} InputLabelProps={{shrink: true, }} />
        </Stack>
      </LocalizationProvider>
      <Button onClick={e=> connectToSocket()}>search</Button>
    </React.Fragment>
  );
}

export {MaterialFormComponent}
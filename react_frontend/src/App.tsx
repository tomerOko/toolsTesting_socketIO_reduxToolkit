import './App.css';
// import AllTests from './components/tests/AllTests';
import { CSSProperties } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { MaterialFormComponent } from './components/material_form_component/material_form_component';
import DealsListComponent from './components/deals_list_component/deals_list_component';
import "slick-carousel/slick/slick.css";  // part of the slick carousle https://react-slick.neostack.com/docs/get-started
import "slick-carousel/slick/slick-theme.css";// part of the slick carousle https://react-slick.neostack.com/docs/get-started

function App() {
  return (
    <Router>
      <div className = "blueishBackground container" style={outerContainerStyle}>
          <Routes>
            <Route path="/search_result" element={<DealsListComponent/>} />
            <Route path="" element={<MaterialFormComponent />} />
          </Routes>
      </div>
    </Router>
 
  );
}

const fullScreen:CSSProperties = { //basic 'full screen container' style
  width:'100vw',
  maxWidth:'100%',
  height:'100vh',
  maxHeight:'100%',
}

const innerContainerStyle:CSSProperties = Object.assign(
  {
    display:'grid',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  fullScreen
)

const outerContainerStyle:CSSProperties = Object.assign(
  {
    display:'absolute'
  }, 
  fullScreen
)

export default App;


// <Routes>
// <Route path="/search_result" element={</*some element here*//>} />
// <Route path="" element={</*some element here*/ />} />
// </Routes>
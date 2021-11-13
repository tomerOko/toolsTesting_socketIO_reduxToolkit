import './App.css';
// import AllTests from './components/tests/AllTests';
import { CSSProperties } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className = "blueishBackground" style={outerContainerStyle}>
        <div className="container blueishBackground" style={innerContainerStyle}>
          <p>hey</p>
         
        </div>
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
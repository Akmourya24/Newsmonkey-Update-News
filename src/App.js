import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import India from './Components/India';
import LoadingBar from 'react-top-loading-bar'



function App() {

  const [progress, setProgress] = useState(0)

const apikey =process.env.REACT_APP_SECRET_CODE 
const pageSize =15;


  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route excet path='/' element={<India setProgress={setProgress} apikey={apikey} />}> </Route>
          <Route excet path='/general' element={<News key="us" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"general"} />}> </Route>
          <Route excet path='/business' element={<News key="business" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"business"} />}> </Route>
          <Route excet path='/sports' element={<News key="sports" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"sports"} />}> </Route>
          <Route excet path='/technology' element={<News key="technology" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"technology"} />}> </Route>
          <Route excet path='/health' element={<News key="health" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"health"} />}> </Route>
          <Route excet path='/science' element={<News key="science" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"science"} />}> </Route>
          <Route excet path='/entertainment' element={<News key="entertainment" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={"us"} category={"entertainment"} />}> </Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App


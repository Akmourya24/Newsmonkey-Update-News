import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import India from './Components/India';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 15;
  apikey = process.env.REACT_APP_SECRET_CODE

  state = {
    progress: 0
  }


  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path='/' element={<India setProgress={this.setProgress} apikey={this.apikey} />}> </Route>
            <Route path='/us' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"general"} />}> </Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"business"} />}> </Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"sports"} />}> </Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"technology"} />}> </Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"health"} />}> </Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"science"} />}> </Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country={"us"} category={"entertainment"} />}> </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}




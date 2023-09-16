 import './App.css';
 import Navbar from './Components/Navbar';
 import News from './Components/News';
 import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
//class based component ....snippet used rcc
//we needed to give key to news component to do remount before doing this changes if we tried to change site by clicking on various link of navbar it only showed the same page and showed the page we want when we reloaded it
export default class App extends Component {
  pageSize=6
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router basename='/'>
            <Navbar/>
            <LoadingBar
                height={3}
                color='#f11946'
                progress={this.state.progress}
                
            />
            <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
            <Route path="/business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country={"in"} category={"business"}/>}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="" pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}/>
            <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={"in"} category={"health"}/>}/>
            <Route path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={"in"} category={"science"}/>}/>
            <Route path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}/>}/>
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}/>}/>
            </Routes>
        </Router>
      </div>
    )
  }
} 



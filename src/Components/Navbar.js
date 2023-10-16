import {
  Link
} from "react-router-dom";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//to make changes in navbar for dark mode change class in nav from dark to light,navbar-dark,bg-dark,use prop and state ...think of the logic
export class Navbar extends Component {
  constructor(props){
    super(props);//we need to do this bcz??
    this.state={
     
      color:"light",
    }}
  static propTypes={
    bgcolor:PropTypes.string,
    // pageSize:PropTypes.number,
    // category:PropTypes.string
  }
  static defaultProps={
    color:"light",
    // country:"in",
    // pageSize:6,
    // category:"general"
  }
   togglemode=async()=>{
    if(this.color==='light')
    {
      this.setState({
        color:"dark",
       
      })
      // document.body.style.backgroundColor='grey'
    //  showalert("dark mode has been enabled","success")
    }
    else{
      this.setState({
        color:"light",


      })
      // document.body.style.backgroundColor='white'
      // showalert("dark mode has been disabled","success")
    }
  }
  render() {
    return (
      <div>
        <nav className ={` navbar navbar-expand-lg navbar-dark bg-dark py-2 fs-5 `}>
            <div className="container-fluid">
                <Link className="navbar-brand px-3 " to="/">Taza Khabar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item  px-3">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item px-3">
                    <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    {/* <li className="nav-item">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                  
                    </div>
                    </li> */}
                </ul>
                {/* <div className={`form-check form-switch text-${this.props.color==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={this.togglemode} role="switch" id="flexSwitchCheckDefault"/>
                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                </div> */}
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

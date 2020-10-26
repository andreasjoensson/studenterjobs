import React, { useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import NytJob from './NyeJobsCompo';
import './App.css';
import SalgJob from './SalgJobsCompo';
import DetailJob from './DetailJobsCompo';
import KontorJob from './KontorJobsCompo';
import ItJob from './ItJobsCompo';


const App  = () => {

const [søgning, setSøgning] = useState('');

const onChange = (e) => {
e.preventDefault();
setSøgning(e.target.value);
}


  return (
     <div>
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Studentarbejde.dk</a>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <input className="form-control form-control-dark w-100" type="text" placeholder="Søg efter din jobtitel" aria-label="Search" onChange={onChange}/>
  </nav>
   <div className="container-fluid">
  <div className="row">
<Sidebar/>
<Switch>
<Route exact path="/" render={() => (<NytJob søgning={søgning}/>)}/>
<Route exact path="/detail" render={() => (<DetailJob søgning={søgning}/>)}/>
<Route exact path="/salg" render={() => (<SalgJob søgning={søgning}/>)}/>
<Route exact path="/kontor" render={() => (<KontorJob søgning={søgning}/>)}/>
<Route exact path="/it" render={() => (<ItJob søgning={søgning}/>)}/>
</Switch>
 </div>
  </div>
   </div>
  );
}
export default App;

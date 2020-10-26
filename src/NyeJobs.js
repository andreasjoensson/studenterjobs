import React, {useState, useEffect} from 'react';
import Job from './job';

const NyeJobs = ({jobs, totalSider}) => {
  return(
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Nyeste studenterjobs</h1>
  <p className="lead">Vi har idag <span style={{color:"red"}}>{totalSider}</span> nye jobs</p>
  </div>
</div>
      <div className="container">
      <div className="row">
      {jobs.map(job => (
            <Job job={job}/>
          ))} 
         </div>
      </div>  
   </main>
)
}
export default NyeJobs;
import React from 'react';
import Job from './job';

const ItJobs = ({jobs, totalSider}) => {
  return(
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Nyeste studie jobs indenfor IT og teknologi</h1>
  <p class="lead">Vi har idag <span style={{color:"red"}}>{totalSider}</span> nye jobs</p>
  </div>
</div>
      <div className="container">
      <div class="row">
      {jobs.map(job => (
            <Job job={job}/>
          ))} 
         </div>
      </div>
    
    </main>
)
}
export default ItJobs;
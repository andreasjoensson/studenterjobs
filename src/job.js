import React from 'react';


const Job = ({job}) => {
return(
    <div class="col-sm">
<div className="card" style={{width: 300}}>
  <div className="card-body">
<h5 className="card-title">{job.Titel}</h5>
<h6 className="card-subtitle mb-2 text-muted">{job.Virksomhed}</h6>
<p className="card-text">{job.Tekst}</p>
    <a target="none" href={job.Link} className="card-link">Se job</a>
</div>
</div>
</div>
)
}

export default Job;
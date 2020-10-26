import React,{useState, useEffect} from 'react';
import {Pagination} from '@material-ui/lab';
import ItJobs from './ItJobs';

const ItJob = ({søgning}) => {
    const [currentPage, setCurrentPage] = useState(1);
const [job, setJob] = useState([]);
const [nuværendeSide, setNuværendeSide] = useState(1);
const [jobsPerSide, setJobsPerSide] = useState(9);
const handleChange = (event, value) => {
      setNuværendeSide(value);
     }

useEffect(() => {
  async function fetchData (){
    const resp = await fetch("http://localhost:3003/it");
    const data = await resp.json();
    setJob(data);
    }
    fetchData();
}, [])


const indexAfSidsteSide = nuværendeSide * jobsPerSide;
const indexAfFørsteSide = indexAfSidsteSide - jobsPerSide;
let nytJob = job.filter(job => {
    let SecondRegex = new RegExp(`${søgning}`, 'gi')
    return job.Titel.match(SecondRegex);
})
const nuværendeJobs = nytJob.slice(indexAfFørsteSide, indexAfSidsteSide);

const paginateNye = (nummer) => {
    setNuværendeSide(nummer)
} 
return(
<>
<ItJobs jobs={nuværendeJobs} siderPerSide={jobsPerSide} totalSider={job.length} paginate={paginateNye}/>
<Pagination page={currentPage} onChange={handleChange} count={Math.round(nytJob.length/jobsPerSide)}/>
</>
)
}

export default ItJob;
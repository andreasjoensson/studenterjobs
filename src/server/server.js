const express = require('express');
const app = express();
const port = 3003;

const redis = require('redis');
const cors = require('cors');
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);


app.use(cors());

app.get('/api', async (req, res) => {
const indeed = await getAsync('indeed');
const Indeed = await JSON.parse(indeed);
const StuderendeIT = await getAsync('studerendeonlineit');
const Studerende = await JSON.parse(StuderendeIT);

const shuffledArray = Indeed.concat(Studerende)

return res.send(JSON.stringify(shuffledArray));
})


app.get('/test', async (req, res) => {
  const Studerende = await getAsync('studerendeonline');
  const Studerendes = await JSON.parse(Studerende);
  
  
  return res.send(JSON.stringify(Studerendes));
  })


app.get('/marketing', async (req, res) => {
    const IndeedDA = await getAsync('indeed');
    const StuderendeOnline = await getAsync('studerendeonline');
    const JobIndexDA = await getAsync('jobindex');
    const StuderendeIT = await getAsync('studerendeonlineit');

    const Studerende = await JSON.parse(StuderendeIT);
    const jobindex = await JSON.parse(JobIndexDA);
    const Indeed = await JSON.parse(IndeedDA);
    const STD = await JSON.parse(StuderendeOnline);

    const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

    let FinalArray = shuffledArray.filter(job => {
        let Marketing = new RegExp("marketing", 'gi')
        let SoMe = new RegExp("social", 'gi')
        let Kommunikation = new RegExp("kommunikation", 'gi');
        let Skribent = new RegExp("skribent", 'gi');

        return job.Titel.match(Marketing) || job.Titel.match(SoMe) ||  job.Titel.match(Kommunikation) || job.Titel.match(Skribent);
      })


    return res.send(JSON.stringify(FinalArray));
})
    
app.get('/detail', async (req, res) => {
    const IndeedDA = await getAsync('indeed');
    const StuderendeOnline = await getAsync('studerendeonline');
    const JobIndexDA = await getAsync('jobindex');

    const StuderendeIT = await getAsync('studerendeonlineit');
  const Studerende = await JSON.parse(StuderendeIT);
    const jobindex = await JSON.parse(JobIndexDA);
    const Indeed = await JSON.parse(IndeedDA);
    const STD = await JSON.parse(StuderendeOnline);

    const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

    let FinalArray = shuffledArray.filter(job => {
        let Delikatesse = new RegExp("delikatesse", 'gi')
        let Butiksassistent = new RegExp("butiksassistent", 'gi');
        let Salgsassisent = new RegExp("salgsassistent", 'gi');
        let studentmedarbejder= new RegExp("studiemedarbejder", 'gi');
        let fakta = new RegExp("fakta", 'gi');
        let føtex = new RegExp("føtex", 'gi');
        
        return job.Titel.match(Salgsassisent) || job.Titel.match(Delikatesse) ||  job.Titel.match(Butiksassistent) || job.Titel.match(fakta) || job.Titel.match(føtex) || job.Titel.match(studentmedarbejder);
      })


    return res.send(JSON.stringify(FinalArray));
})

app.get('/kontor', async (req, res) => {
  const IndeedDA = await getAsync('indeed');
  const StuderendeOnline = await getAsync('studerendeonline');
  const JobIndexDA = await getAsync('jobindex');
 const jobindex = await JSON.parse(JobIndexDA);

 const StuderendeIT = await getAsync('studerendeonlineit');
  const Studerende = await JSON.parse(StuderendeIT);
  const Indeed = await JSON.parse(IndeedDA);
  const STD = await JSON.parse(StuderendeOnline);
 

  const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

  let FinalArray = shuffledArray.filter(job => {
      let Kundeservice = new RegExp("kundeservice", 'gi')
      let Telefonisk = new RegExp("telefonisk", 'gi');
      let Regnskab = new RegExp("regnskab", 'gi');
      let økonomi = new RegExp("økonomi", 'gi');
      let kunderådgiver =  new RegExp("kunderådgiver", 'gi');
      let kommunikation = new RegExp("kommunikation", 'gi');
      
      return job.Titel.match(Kundeservice) || job.Titel.match(Telefonisk) ||  job.Titel.match(Regnskab) || job.Titel.match(økonomi) || job.Titel.match(kunderådgiver) || job.Titel.match(kommunikation);
    })


  return res.send(JSON.stringify(FinalArray));
})
app.get('/it', async (req, res) => {
  const IndeedDA = await getAsync('indeed');
  const StuderendeOnline = await getAsync('studerendeonline');
  const StuderendeIT = await getAsync('studerendeonlineit');
const JobIndexDA = await getAsync('jobindex');
  const Studerende = await JSON.parse(StuderendeIT);

 const jobindex = await JSON.parse(JobIndexDA);
  const Indeed = await JSON.parse(IndeedDA);
  
  const STD = await JSON.parse(StuderendeOnline);
 

  const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

  let FinalArray = shuffledArray.filter(job => {
      let Software = new RegExp("software", 'gi')
      let Developer = new RegExp("developer", 'gi');
      let Digital = new RegExp("digital", 'gi');
      let javascript =  new RegExp("javascript", 'gi');
      let system = new RegExp("system", 'gi');
      
      return job.Titel.match(Software) ||  job.Titel.match(Developer) || job.Titel.match(Digital) || job.Titel.match(javascript) || job.Titel.match(system);
    })


  return res.send(JSON.stringify(FinalArray));
})




app.get('/salg-praktik', async (req, res) => {
  const IndeedDA = await getAsync('indeed');
  const StuderendeOnline = await getAsync('studerendeonline');
  const StuderendeIT = await getAsync('studerendeonlineit');
const JobIndexDA = await getAsync('jobindex');
  const Studerende = await JSON.parse(StuderendeIT);

 const jobindex = await JSON.parse(JobIndexDA);
  const Indeed = await JSON.parse(IndeedDA);
  
  const STD = await JSON.parse(StuderendeOnline);
 

  const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

  let FinalArray = shuffledArray.filter(job => {
      let Software = new RegExp("praktik", 'gi')
      let IT = new RegExp("kommunikation", 'gi');

      
      return job.Titel.match(Software) && job.Titel.match(IT);
    })


  return res.send(JSON.stringify(FinalArray));
})



app.get('/it-praktik', async (req, res) => {
  const IndeedDA = await getAsync('indeed');
  const StuderendeOnline = await getAsync('studerendeonline');
  const StuderendeIT = await getAsync('studerendeonlineit');
const JobIndexDA = await getAsync('jobindex');
  const Studerende = await JSON.parse(StuderendeIT);

 const jobindex = await JSON.parse(JobIndexDA);
  const Indeed = await JSON.parse(IndeedDA);
  
  const STD = await JSON.parse(StuderendeOnline);
 

  const shuffledArray = Indeed.concat(STD, jobindex, Studerende);

  let FinalArray = shuffledArray.filter(job => {
      let praktik = new RegExp("praktik", 'gi')
      let Software = new RegExp("software", 'gi')
      let Developer = new RegExp("developer", 'gi');
      let Digital = new RegExp("digital", 'gi');
      let javascript =  new RegExp("javascript", 'gi');
      let system = new RegExp("system", 'gi');
      let intern = new RegExp("intern", 'gi');
      
      return job.Titel.match(praktik)  || job.Titel.match(intern) && job.Titel.match(Software) || job.Titel.match(Developer) ||job.Titel.match(Digital) ||job.Titel.match(javascript) || job.Titel.match(system);
    })


  return res.send(JSON.stringify(FinalArray));
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
const puppeteer = require('puppeteer');
const redis = require("redis");
const client = redis.createClient();
const {promisify} = require("util");
const setAsync = promisify(client.set).bind(client);

module.exports =  (async () => {
async function getJob (url) {
  const page = await browser.newPage();
    await page.goto(url);

    /*
    const button = await page.$('.close')
    await button.evaluate(button => button.click());
    */

let jobs = await page.evaluate(() =>

Array.from(document.querySelectorAll('.jobsearch-result')).map(jobs => ({
    'Virksomhed': jobs.querySelector('.PaidJob > p > a').innerText,
    'Lokation':  jobs.querySelector('.PaidJob > p').innerText,
    'Titel': jobs.querySelector('.PaidJob > a > b').innerText,
    'Link': jobs.querySelector('.PaidJob > a').href
}))
) 
// Skal man afslutte recursion
if(jobs.length < 1){
return jobs
} else{  
 let nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) +1;
  if(nextPageNumber == 15){
    return jobs
  }
 const nextUrl = `https://www.jobindex.dk/jobsoegning/oevrige/student/danmark?page=${nextPageNumber}`;
 return jobs.concat(await getJob(nextUrl))
}
};
const browser = await puppeteer.launch({headless:false, slowMo:300});
const firstUrl = "https://www.jobindex.dk/jobsoegning/oevrige/student/danmark?page=2"
const jobListe = await getJob(firstUrl);
const success = setAsync('jobindex', JSON.stringify(jobListe))
console.log({success});

await browser.close();
})();
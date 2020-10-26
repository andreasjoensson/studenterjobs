const puppeteer = require('puppeteer');
const redis = require("redis");
const client = redis.createClient();
const {promisify} = require("util");
const setAsync = promisify(client.set).bind(client);

(async () => {
async function getJob (url) {
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(url);
    const jobs = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".container-fluid > .job-item-container")).map(item => ({
        "Titel": item.querySelector('.job-content > .job-header').innerText,
        "Virksomhed": item.querySelector('.job-content > .job-teaser').innerText.match(/hos\??.* /gi).join("").replace('hos ','').split(",")[0],
        "Lokation": item.querySelector('.job-content > .job-teaser').innerText.replace(' ','').split(",")[1],
        "Link": item.querySelector('.job-content > .job-teaser').innerText.replace(' ','').split(",")[1],
        "Tekst":item.querySelector('.job-content > .job-teaser').innerText,
        "Link": item.querySelector('a').href
    })) 
    )
// Skal man afslutte recursion
if(jobs.length < 1){
return jobs
} else{
 const nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) +1;

 const nextUrl = `https://studerendeonline.dk/job/?key=it&cvtype=4&virk=&oprettet=?&page=${nextPageNumber}`;
 return jobs.concat(await getJob(nextUrl))
}
};
const browser = await puppeteer.launch();
const firstUrl = "https://studerendeonline.dk/job/?key=it&cvtype=4&virk=&oprettet=?&page=1"
const jobListe = await getJob(firstUrl);
const success = setAsync('studerendeonlineit', JSON.stringify(jobListe));

console.log({success})

await browser.close();
})();


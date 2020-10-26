const puppeteer = require('puppeteer');
const redis = require("redis");
const client = redis.createClient();
const {promisify} = require("util");
const setAsync = promisify(client.set).bind(client);

module.exports  = (async () => { 
 async function getJob (url) {
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setViewport({ width: 1280, height: 720 });
    await page.goto(url);

    const jobs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("#resultsCol > .jobsearch-SerpJobCard")).map(jobs => ({
    'Virksomhed':  jobs.querySelector('.sjcl > div > .company').innerText,
    'Titel': jobs.querySelector('.title > a').innerText,
    'Link': "https://www.indeed.com" + jobs.querySelector('h2 > a').getAttribute('href'),
    'Lokation': jobs.querySelector('.sjcl  > .recJobLoc').dataset.rcLoc,
    'Tekst': jobs.querySelector('.summary > ul > li').innerText
        }))
    )


// Skal man afslutte recursion
if(jobs.length < 1){
return jobs
} else{
 const nextPageNumber = parseInt(url.match(/start=(\d+)$/)[1], 10) +10;
if(nextPageNumber == 90){
return jobs
}
 const nextUrl = `https://dk.indeed.com/jobs?q=Studiejob&l=K%C3%B8benhavn&start=${nextPageNumber}`;
 return jobs.concat(await getJob(nextUrl));
}
};
const browser = await puppeteer.launch({headless:false, slowMo:300});
const firstUrl = "https://dk.indeed.com/jobs?q=Studiejob&l=K%C3%B8benhavn&start=10"
const jobListe = await getJob(firstUrl);
const success = setAsync('indeed', JSON.stringify(jobListe));

console.log({success});


await browser.close();
})();


const puppeteer = require('puppeteer');
const redis = require("redis");
const client = redis.createClient();
const {promisify} = require("util");
const setAsync = promisify(client.set).bind(client);

(async () => {
async function getJob (url) {
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const knap = await page.$('.ns-close');
  
  if(await page.$('.ns-close')){
await knap.evaluate(knap => knap.click());
  }

  await page.setViewport({ width: 1280, height: 720 });
    await page.goto(url);

    const jobs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("#jobs_list__page > .vacancy_wrapper-js")).map(item => ({
      "Virksomhed": item.querySelector('.result > .top-wr > .left-static-block > a').innerText
       }))
    
       )


// Skal man afslutte recursion
if(jobs.length < 1){
return jobs
} else{
 const nextPageNumber = parseInt(url.match(/p=(\d+)$/)[1], 10) +1;
if(nextPageNumber == 11){
return jobs
}
 const nextUrl = `https://dk.jooble.org/job-student?p=${nextPageNumber}`;
 return jobs.concat(await getJob(nextUrl))
}
};
const browser = await puppeteer.launch();
const firstUrl = "https://dk.jooble.org/job-student?p=1"
const jobListe = await getJob(firstUrl);
const success = setAsync('kea', JSON.stringify(jobListe));

console.log({success})

await browser.close();
})();


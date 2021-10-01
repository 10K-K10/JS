const hoursE1=document.getElementById('hours');
const daysE1=document.getElementById('days');
const secE1=document.getElementById('seconds');
const minsE1=document.getElementById('mins');


const reqdate='26 Jan 2022';
function countdown(){
    const datereq=new Date(reqdate);
    const currentDate=new Date();
    const totalsec=(datereq-currentDate)/1000;
    const sec=Math.floor(totalsec)%60;
    const mins=Math.floor(totalsec/60)%60;
    const hours=Math.floor(totalsec/3600)%24;
    const days=Math.floor(totalsec/3600/24);

    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    secE1.innerHTML=sec;
    minsE1.innerHTML=mins;
}
countdown();
setInterval(countdown, 1000);
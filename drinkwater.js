var time=0;
var count=0;
var interval=20;
var date;
var dateTime;
var dateTime2;
var dateTime3;
var dateTime4;
var dateTime5;
var mno;
var displayMin;
var displaySec;
var sound;

function timeStart(){
  time = {minutes: interval, seconds: interval*60};
  count = time.seconds;
  date = new Date();
  date = date.toString();
  dateTime = date.slice(16, 25);
  dateTime2 = dateTime.slice(0, 2);
  dateTime3 = dateTime.slice(2, 5);

  if (dateTime2 > 12)
  {dateTime2 = dateTime2 - 12; mno = " PM"}
  else if(dateTime2 < 12)
         {mno=" AM";}

  dateTime4 = dateTime2 + dateTime3+mno;
  dateTime3 = dateTime.slice(3,5);
  dateTime3 = parseInt(dateTime3)+interval;
  if(dateTime3 >= 60)
  {
    dateTime3 = dateTime3 - 60;
    dateTime2 = parseInt(dateTime2)+1;
    if(dateTime2 > 12)
    {
      dateTime2 = dateTime2 - 12;
      if(mno == " PM")
      {mno == " AM";}
      else {
        mno = " PM";}
    }
  }

  dateTime2 = dateTime2.toString();
  dateTime3 = dateTime3.toString();

  if(dateTime3.length < 2)
  {
    dateTime3 = "0"+dateTime3;
  }

  dateTime5 = dateTime2+":"+dateTime3+mno;

}
function updatePage(){

}
function drink(){
sound.play(); alert("Hi Hope! It's Jacob, can you please drink some water for me? I love you. Make sure to drink a little more <3"); window.open('./resources/hellothere.html');
}
function main(){
  sound = document.getElementById('sound');
  if(count == 0)
  {drink(); timeStart();} //cycle keeping

  count=count-1;

  displayMin=Math.round(count/60)-1;
  if(count < 60)
  {displayMin=0;}
  displaySec=count%60;
  document.getElementById('h').innerHTML = dateTime4 + "  ----  " + dateTime5;
  document.getElementById('a1').innerHTML = displayMin + ":" + displaySec;
}

setInterval(main, 1000);

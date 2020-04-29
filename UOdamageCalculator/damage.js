var tiddies=-1;
document.getElementById('jackb').addEventListener('click', function(){
  tiddies=tiddies*-1;
  if(tiddies == -1){
    document.getElementById('jackb').className="jackButtOff";
    document.getElementById('jackb').innerHTML="Lumberjack: OFF";
  }
  if(tiddies == 1){
    document.getElementById('jackb').className="jackButtON";
    document.getElementById('jackb').innerHTML="Lumberjack: ON";
  }
});
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("tacsInput").contentEditable = true;
  document.getElementById("anatInput").contentEditable = true;
  document.getElementById("jackInput").contentEditable = true;
  document.getElementById("strInput").contentEditable = true;
  document.getElementById("minInput").contentEditable = true;
  document.getElementById("maxInput").contentEditable = true;
  document.getElementById("diInput").contentEditable = true;

  function validNumbersCheck(tacs, anat, jack, str, di){
    if (tacs/1 == tacs && anat/1 == anat && jack/1 == jack && str/1 == str && di/1 == di)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  function main(){

    var tacs = document.getElementById('tacsInput').innerHTML;
    var anat = document.getElementById('anatInput').innerHTML;
    var jack = document.getElementById('jackInput').innerHTML;
    var str = document.getElementById('strInput').innerHTML;
    var di = document.getElementById('diInput').innerHTML;
    var min = document.getElementById('minInput').innerHTML;
    var max = document.getElementById('maxInput').innerHTML;
    var tBon;
    var aBon;
    var lBon;
    var strBon;
    var finalBon=0;
    if (validNumbersCheck(tacs, anat, jack, str, di) == true)
    {
      if(tacs<0){tacs=0;document.getElementById('tacsInput').innerHTML = tacs;}
      if(tacs>120){tacs=120;document.getElementById('tacsInput').innerHTML = tacs;}
      if(anat<0){anat=0;document.getElementById('anatInput').innerHTML = anat;}
      if(anat>120){anat=120;document.getElementById('anatInput').innerHTML = anat;}
      if(jack<0){jack=0;document.getElementById('jackInput').innerHTML = jack;}
      if(jack>100)
      {jack=100;document.getElementById('jackInput').innerHTML = jack;}
      if(str<10)
      {str=10;document.getElementById('strInput').innerHTML = str;}
      if(str>150)
      {str=150;document.getElementById('strInput').innerHTML = str;}

      tBon=tacs/1.6;
      if(tacs >= 100){tBon=tBon+6.25;}
      aBon=anat/2;
      if(anat >= 100){aBon=aBon+5;}
      lBon=jack/5;
      if(jack == 100){lBon=lBon+10;}
      strBon=str*0.3;
      if(str >= 100){strBon=strBon+5;}
      finalBon = tBon+aBon+strBon+parseInt(di);
      if(tiddies == 1)
      {finalBon=finalBon+lBon;}
      finalBon=finalBon/100;
      document.getElementById('minOutput').innerHTML = Math.floor(parseInt(min)+(min*finalBon));
      document.getElementById('maxOutput').innerHTML = Math.floor(parseInt(max)+(max*finalBon));
    }
    else
    {
      document.getElementById("minOutput").innerHTML = "- - -";
      document.getElementById("maxOutput").innerHTML = "- - -";
    }
  }

  setInterval(main, 1000);
});

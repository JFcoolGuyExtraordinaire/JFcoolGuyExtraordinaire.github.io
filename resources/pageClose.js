var count = 3*60;
function main(){
count = count - 1;

if(count == 0)
{window.close();}
}

setInterval(main, 1000);

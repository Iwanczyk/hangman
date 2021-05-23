var haslo = "Better late than never";
var hasla = ['Practice makes perfect','A friend in need is a friend indeed','Two heads are better than one','Better safe than sorry','Every cloud has a silver lining','Great minds think alike','There is no place like home','Home is where the heart is','Slow and steady wins the race','Strike while the iron is hot','Better late than never','Time heals all wounds','Easier said than done','All is well that ends well','An apple a day keeps the doctor away','Birds of a feather flock together','Blood is thicker than water','Better an open enemy than a false friend','Every man has his faults','The Grass is always greener','Never judge a book by its cover','A  sound mind in a sound body','A change is as good as a rest','A man is as old as he feels','Experience is the mother of wisdom','Every country has its customs','The early bird catches the worm','Money makes the world go round','A fool and his money are soon parted','Actions speak louder than words','Doing is better than saying','A penny saved is a penny gained','Envy never enriched any man','Beauty lies in lovers eyes','Do not cry for the moon','A friend to all is a friend to none','Beware of a silent dog and still water','A bird in the hand is worth two in the bush','Keep your friends close and your enemies closer','All good things must come to an end','Two heads are better than one','Never put off till tomorrow what you can do today','The road to hell is paved with good intentions','You reap what you sow','Actions speak louder than words','A picture is worth a thousand words','A drowning man will clutch at a straw','A room without books is a body without soul','An ounce of prevention is worth a pound of cur','Be to yourself as you would to your friend','Constant dropping wears away a stone','Gravitation cannot be held responsible for people falling in love','He who lives by the sword shall die by the sword','It is a wise talker who knows when he has nothing to say'];
var losuj = Math.floor(Math.random() * hasla.length);
haslo=hasla[losuj];
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var pudla=0;
var yes = new Audio("../sounds/yes.wav");
var no = new Audio("../sounds/no.wav");
var win = new Audio("../sounds/win.mp3");
var loose = new Audio("../sounds/loose.mp3");
var minutes=2;
var seconds=180;

var timer = setInterval( function(){
   seconds--;
   
   if(seconds%60<10)
   document.getElementById("timer").innerHTML="Time left: 0"+minutes+":0"+(seconds%60);
   else document.getElementById("timer").innerHTML="Time left: 0"+minutes+":"+(seconds%60);
   
   if(seconds%60==0) minutes--;
   if(minutes==0 && seconds<=10)
      document.getElementById("timer").style.color="red";
   
   if(minutes<=0 && seconds<=0)
   {
      loose.play();
   document.getElementById("alfabet").innerHTML='<span style="color: red;">You Lost!</span> <br />Answer: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
      clearInterval(timer);
   }

} ,1000);

/*function clear()
{
   clearInterval(timer);
}


function timer()
{
   seconds--;
   
   if(seconds%60<10)
   document.getElementById("timer").innerHTML="Pozostały czas: 0"+minutes+":0"+(seconds%60);
   else document.getElementById("timer").innerHTML="Pozostały czas: 0"+minutes+":"+(seconds%60);
   
   if(seconds%60==0) minutes--;
   if(minutes<=0 && seconds<=0)
   {
      loose.play();
   document.getElementById("alfabet").innerHTML='<span style="color: red;">Przegrana!</span> <br />Hasło: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
      clearTimeout();
   }
   else setTimeout("timer()",1000);
}
*/
for(i=0;i<dlugosc;i++)
{
   if(haslo.charAt(i)==" ") haslo1=haslo1+" ";
   else haslo1 = haslo1+"-";
}

function wypisz_haslo()
{
document.getElementById("plansza").innerHTML=haslo1; 
}

window.onload = start;

function start()
{
   var tresc_diva = "";
   
   for(i=0;i<=25;i++)
   {
      var idDiva="lit"+i;
      tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+idDiva+'">'+alfabet[i]+'</div>';
      if((i+1)%7==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
   }
   document.getElementById("alfabet").innerHTML = tresc_diva;
   wypisz_haslo();
   
}

String.prototype.ustawZnak = function(miejsce, znak)
{
   if(miejsce> this.length-1) return this.toString();
   else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
   
}

function sprawdz(nr)
{
   var trafiona = false;
   
   for(i=0;i<haslo.length;i++)
   {
      if(haslo.charAt(i)==alfabet[nr])
      {
      haslo1=haslo1.ustawZnak(i,alfabet[nr]);
      trafiona = true;
      }
   }
   
   if(trafiona==true)
   {
      yes.play();
      var idDiva="lit"+nr;
      document.getElementById(idDiva).style.background = "#003300";
      document.getElementById(idDiva).style.color = "#00C000";
      document.getElementById(idDiva).style.border = "3px solid #00C000";
      document.getElementById(idDiva).style.cursor = "default";
      document.getElementById(idDiva).setAttribute("onclick",";");
      
      wypisz_haslo();
   }
   else
   {
      no.play();
      var idDiva="lit"+nr;
      document.getElementById(idDiva).style.background = "#330000";
      document.getElementById(idDiva).style.color = "#C0000";
      document.getElementById(idDiva).style.border = "3px solid #C00000";
      document.getElementById(idDiva).style.cursor = "default";
      
      document.getElementById(idDiva).setAttribute("onclick",";");
      
      pudla++;
      var obraz = "../image/h"+pudla+".jpg";
      document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt="" />';
   }
   
   //wygrana
   if(haslo==haslo1)
   {
      win.play();
   document.getElementById("alfabet").innerHTML='<span style="color: green;">Congratulations! You win!</span> <br />Answer: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
      clearInterval(timer);
      
   }
   //przegrana
   if(pudla>=6)
   {loose.play();
   document.getElementById("alfabet").innerHTML='<span style="color: red;">You Lost!</span> <br />Answer: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
    clearInterval(timer);
   }
}

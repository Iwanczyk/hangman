var haslo = "Bez pracy nie ma kołaczy";
var hasla = ['Bez pracy nie ma kołaczy','Darowanemu koniowi nie zagląda się w zęby','Fortuna kołem się toczy','Nie chwal dnia przed zachodem słońca','Lepszy wróbel w garści niż gołąb na dachu','Apetyt rośnie w miarę jedzenia','Dzieci i ryby głosu nie mają','Piąte koło u wozu','Cicha woda brzegi rwie','Jak kuba bogu tak bóg kubie','Broda mędrcem nie czyni','Kradzione nie tuczy','Mądrej głowie dość dwie słowie','Na bezrybiu i rak ryba','Ściany mają uszy','Z dużej chmury mały deszcz','Czarny koń','Domek z kart','Do wesela się zagoi','Dzielić skórę na niedźwiedziu','Elektryka prąd nie tyka','Głową muru nie przebijesz','Iść po linii najmniejszego oporu','Jedna jaskółka wiosny nie czyni','Lepiej późno niż wcale','Lepiej zapobiegać niż leczyć','Lepsze jest wrogiem dobrego','Lepszy rydz niż nic','Mądrzejsze jajko od kury','Miłość jest ślepa','Na układy nie ma rady','Nauka nie poszła w las','Nie ma róży bez kolców','Nie taki diabeł straszny jak go malują','Okazja czyni złodzieja','Raz na wozie raz pod wozem','Szukać igły w stogu siana','Tonący brzytwy się chwyta','Trafiła kosa na kamień','Trafiło się ślepej kurze ziarno','Twardy orzech do zgryzienia','W przyrodzie nic nie ginie','Wyłożyć kawę na ławę','Wypływać na szerokie wody','Żyć nie umierać','Żyć jak pies z kotem','Żywe srebro','Szyte grubymi nićmi','Chodzić na rzęsach','Ciągnąć kogoś za język','Chwytać kogoś za słowa','Czuć się jak ryba w wodzie','Grać komuś na nerwach','Hultajska praca wniwecz się obraca','Korona z głowy nie spadnie','Krakowskim targiem','Mieć głowę na karku','Łaska pańska na pstrym koniu jeździ','Najstarsi górale nie pamiętają','Nauka nie poszła w las','Nie ma gdzie szpilki wcisnąć','Nie ma róży bez kolców','Nie taki diabeł straszny jak go malują','Niedaleko pada jabłko od jabłoni','Rozejść się po kościach','Trafiło się jak ślepej kurze ziarno','Upiec dwie pieczenie na jednym ogniu','Znać jak własną kieszeń','Apostoł ludzkości rzadko pości','Najlepszą obroną jest atak','Biednemu zawsze wiatr w oczy','Brać nogi za pas','Czuć się jak ryba w wodzie','Dla chcącego nic trudnego','Gorzkie lekarstwo słodko leczy','Groźniejsze jest wojsko jeleni przy lwie hetmanie niż wojsko lwów przy hetmanie jeleniu',''];
var losuj = Math.floor(Math.random() * hasla.length);
haslo=hasla[losuj];
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var alfabet = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ź','Ż'];
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
   document.getElementById("timer").innerHTML="Pozostały czas: 0"+minutes+":0"+(seconds%60);
   else document.getElementById("timer").innerHTML="Pozostały czas: 0"+minutes+":"+(seconds%60);
   
   if(seconds%60==0) minutes--;
   if(minutes==0 && seconds<=10)
      document.getElementById("timer").style.color="red";
   
   if(minutes<=0 && seconds<=0)
   {
      loose.play();
   document.getElementById("alfabet").innerHTML='<span style="color: red;">Przegrana!</span> <br />Hasło: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
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
   
   for(i=0;i<=34;i++)
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
   document.getElementById("alfabet").innerHTML='<span style="color: green;">Wygrana!</span> <br />Hasło: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
      clearInterval(timer);
      
   }
   //przegrana
   if(pudla>=6)
   {loose.play();
   document.getElementById("alfabet").innerHTML='<span style="color: red;">Przegrana!</span> <br />Hasło: '+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    clearInterval(timer);
   }
}

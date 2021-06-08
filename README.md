# Gra Wisielec

## Autor: Rafał Iwańczyk
## Specyfikacja projektu
### Cel projektu : Stworzenie strony internetowej z popularną grą słowną.
#### Cele szczegółowe:
   1. Stworzenie w pełni funkcjonalnej gry w języku polskim oraz angielskim.
   2. Stworzenie kilku poziomów trudności mających realny wpływ na rozgrywkę.

### Wykorzystane technologie:
* HTML
* JavaScript
* CSS

### Interfejs serwisu

   <details>
       <summary>Ekran główny</summary>
	
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/index.PNG "Ekran główny")

           Screen przedstawiający ekran główny aplikacji
	   
   <p>Po otworzeniu strony pojawia się ekran główny, gdzie w pierwszej kolejności należy wybrać język gry. Obecnie dostępne są dwa języki: polski oraz angielski. Aktualnie hasłami dostępnymi w grze są przysłowia polskie oraz angielskie, w przyszłości planowane jest dodanie kategorii oraz haseł wczytywanych z bazy danych.</p>
   
   </details>
   
   <details>
       <summary>Ekran główny - PL</summary>

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/indexPL.PNG "Ekran główny")

            Screen przedstawiający ekran główny aplikacji
	   
   <p>Wybór pozwala dostosować język interfejsu, alfabet oraz pulę haseł w grze.
  </p>
  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/menuPL1.PNG "Ekran główny")

           Screen przedstawiający ekran wyboru poziomu trudności w języku polskim
  
  Aktualnie gra posiada trzy poziomy trudności: 
 
    Łatwy: 
    - Gracz ma 12 szans na pomyłkę przed przegraną 
    - Hasła w puli są krótkie oraz popularne
    - Brak ograniczeń czasowych w rozgrywce
    
    Normalny: 
    - Gracz ma 9 szans na pomyłkę przed przegraną 
    - Hasła w puli są dłuższe
    - Brak ograniczeń czasowych w rozgrywce
    
    Trudny: 
    - Gracz ma 6 szans na pomyłkę przed przegraną 
    - Hasła w puli są dłuższe oraz mało popularne
    - Ograniczenie czasowe 3 minut
    

  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/menuPL2.PNG "Ekran wyboru poziomu trudności")
  
  <p>
  Każdemu poziomowi trudności towarzyszy animacja szybkości tworzenia rysunku szubienicy w zależności od danej trudności.

  </p>
  
 ![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/menuPL3.PNG "Ekran wyboru poziomu trudności - Normalny")

          Omówienie przykładowej rozgrywki na poziomie trudności normalnym
          
 ![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL.PNG "Rozgrywka, poziom trudności - Normalny")         
  
  <p>Po rozpoczęciu rozgrywki oczom gracza ukazuje się plansza, gdzie w górnej części widnieje ukryte hasło (znana jest jedynie jego długość, ułożenie słów oraz ich długość), z prawej strony widnieje plansza ze wszystkimi literami alfabetu, wraz ze znakami charakterystycznymi dla języka polskiego. Obok planszy liter znajduje się pole, gdzie wraz z pomyłkami, tworzona jest szubienica. </p> 
  
  ![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL2.PNG "Rozgrywka, poziom trudności - Normalny")
  
  <p>Każda kliknięta litera, która znajduje się przynajmniej raz w wylosowanym haśle zostaje zaznaczona na zielono, a możliwość ponownego jej kilknięcia wyłączona. Ponadto w wylosowanym haśle odkrywana jest dana litera na poprawnej pozycji. <br>
     Każda wciśnięta litera, która nie znajduje się w haśle, zaznaczana jest na czerwono, możliwość ponownego jej kliknięta wyłączona, a szanse gracza zmniejszone - dorysowana kolejna część szubienicy.
</p> 
  
  ![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL3.PNG "Rozgrywka, poziom trudności - Normalny")
  
  ![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL4.PNG "Rozgrywka, poziom trudności - Normalny")
  
  <p>Po odgadnięciu hasła ukazuje się komunikat gratulujący wygranej (wraz z efektem dźwiękowym), hasło, które było wylosowane do odgadnięcia oraz hiperlink, umożliwiający ponowną grę na wybranym poziomie trudności.
</p> 

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL5.PNG "Rozgrywka, poziom trudności - Normalny")

          Omówienie innej przykładowej rozgrywki na poziomie trudności normalnym
                 
  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/normalPL6.PNG "Rozgrywka, poziom trudności - Normalny")  

 <p>Po wykorzystaniu wszystkich szans następuje przegrana, oczom gracza ukazuje się odpowiedni komunikat (wraz z efektem dźwiękowym) przegranej, hasło, które było wylosowane do odgadnięcia oraz hiperlink, umożliwiający ponowną grę na wybranym poziomie trudności.
</p>  

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardPL.PNG "Rozgrywka, poziom trudności - Trudny")

          Omówienie przykładowej rozgrywki na poziomie wysokim poziomie trudności

 <p>Gra na wysokim poziomie trudności przebiega analogicznie jak na innych poziomach, utrudnieniami są: mniejsza ilość szans, trudne i mało popularne hasła oraz 3 minutowe ograniczenie czasowe.
</p>

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardPL2.PNG "Rozgrywka, poziom trudności - Trudny")
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardPL3.PNG "Rozgrywka, poziom trudności - Trudny")
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardPL4.PNG "Rozgrywka, poziom trudności - Trudny")


          Po upływie trzech minut następuje przegrana
   </details>
   
   <details>
       <summary>Ekran główny - EN</summary>

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/indexEN.PNG "Ekran główny")

         Screen przedstawiający ekran główny aplikacji
	   
   <p> Wybór pozwala dostosować język interfejsu, alfabet oraz pulę haseł w grze.</p>
  
  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/menuEN1.PNG "Ekran główny")

           Screen przedstawiający ekran wyboru poziomu trudności w języku polskim
  
Aktualnie gra posiada trzy poziomy trudności: 

    Łatwy:
    - Gracz ma 12 szans na pomyłkę przed przegraną
    - Hasła w puli są krótkie oraz popularne
    - Brak ograniczeń czasowych w rozgrywce

  
    
    Normalny: 
    - Gracz ma 9 szans na pomyłkę przed przegraną 
    - Hasła w puli są dłuższe
    - Brak ograniczeń czasowych w rozgrywce
    
    Trudny: 
    - Gracz ma 6 szans na pomyłkę przed przegraną 
    - Hasła w puli są dłuższe oraz mało popularne
    - Ograniczenie czasowe 3 minut

  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/menuEN2.PNG "Ekran wyboru poziomu trudności")
  
  <p>
  Każdemu poziomowi trudności towarzyszy animacja szybkości tworzenia rysunku szubienicy w zależności od danej trudności.

  </p>

          Omówienie przykładowej rozgrywki na poziomie trudności normalnym
  
  <p>Po rozpoczęciu rozgrywki oczom gracza ukazuje się plansza, gdzie w górnej części widnieje ukryte hasło (znana jest jedynie jego długość, ułożenie słów oraz ich długość), z prawej strony widnieje plansza ze wszystkimi literami alfabetu, wraz ze znakami charakterystycznymi dla języka polskiego. Obok planszy liter znajduje się pole, gdzie wraz z pomyłkami, tworzona jest szubienica. </p> 
  
  <p>Każda kliknięta litera, która znajduje się przynajmniej raz w wylosowanym haśle zostaje zaznaczona na zielono, a możliwość ponownego jej kilknięcia wyłączona. Ponadto w wylosowanym haśle odkrywana jest dana litera na poprawnej pozycji. <br>
     Każda wciśnięta litera, która nie znajduje się w haśle, zaznaczana jest na czerwono, możliwość ponownego jej kliknięta wyłączona, a szanse gracza zmniejszone - dorysowana kolejna część szubienicy.
</p> 
  
![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardEN.PNG "Rozgrywka, poziom trudności - Trudny")

          Omówienie przykładowej rozgrywki na poziomie wysokim poziomie trudności

 <p>Gra na wysokim poziomie trudności przebiega analogicznie jak na innych poziomach, utrudnieniami są: mniejsza ilość szans, trudne i mało popularne hasła oraz 3 minutowe ograniczenie czasowe.
</p>

![alt text](https://github.com/Iwanczyk/hangman/blob/main/img/hardEN2.PNG "Rozgrywka, poziom trudności - Trudny")
          Po upływie trzech minut następuje przegrana
   </details>

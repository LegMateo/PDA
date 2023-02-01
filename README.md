# PDA
Projekt sadrži:
  High Level bpmn model + png
  Low Level bpmn model + png
  High Level bpmn s call activityjem + png
  
  Pokretanje Low Level modela:
 
1. Clonajte repozitorij
2. Pokrenite camunda modler.
3. Otvorite Low_Level.bpmn u camunda modleru koji se nalazi u repozitoriju  
4. Pokretanje camunda servera na localhostu
5. Otvaranje repozitorija u VSC-u ili bilo kojem code editoru
  

Ovoreni Low_Level.bpmn u Camunda modleru treda deployati na Camunda server

Kako bi pokrenuli kod koji sam napiso (start.js file) potrebno je otvoriti terminal u folderu u kojem se nalazi 
preuzeti repozitorij tj. projekt (PDA). u terminal upisati node start.js kako bi se pokrenuo kod

Nakon svih odrađenih koraka u camunda serveru na vašem browseru treba otvoriti Tasklist -> Start process -> Low_PDA.
Business Key ostavite prazno.

Nakon pokretanja svega nadedenog refreshate Tasklist i trebala bi se pojaviti forma koju trebate ispuniti za prijavu 
blagajnika

U Cockpitu možete pratiti token

Samo ispunjavajte forme (nekad treba refreshat tasklist da bi dosla nova forma)

-- Inače nakon što se završi naplata proces se prije ponovo pokreto tj. nakon naplate mogo je opet naplaćivat tj. 
vratiti se na početak izvođenja ali nakon zadnjeg updejta, kad sam trebo dodat call activity u High_Level, proces se 
zavrsava nakon sto se zavrsi naplata kako bi token mogao prijeću preko call activitya u high level.


  
 Pokretanje High Level modela:
 
 Sve isto ko i gore samo treba deployat High_Level_S_call_activity.bpmn na camunda server pa onda to pokrenut u 
 tasklistu bez Business Keya
 
 -- High Level nije programiran! Postoje dva high-a jedan sa call activitijem, a jedan koji sam jos prije napravio. Oba modela su modeliranu u Camundi
 te imaju sve porebne navedene procesne varijable, fome, expressione i XOR-ove
 
 -- VSC će vam javljati errore kada budete pokretali High Level s call activityjem ali to je zato jer fali kod za njega
 pa se žali na expressione u XOR-ovima.
 











 

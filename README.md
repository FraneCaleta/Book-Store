# About project
This project was made for a subject at university called "Mobile application programming".

It is an mobile application for ordering books that has CRUD (Create, Read, Update and Delete) functionalities, user authentication and realtime database (Firebase).<br />
It was created by using Expo, a framework and a platform for universal React applications. For application state management Redux was used, an open-source JavaScript library.

## Application pictures examples (you can also find them attached in ./assets/app-look/)
1. Cart screen - https://imgur.com/a/vWcycCc
2. Authentication screen - https://imgur.com/Ohbwx1w
3. Add product screen - https://imgur.com/Th1qbLh
4. Edit product screen - https://imgur.com/XdzRO0h
5. Current user products - https://imgur.com/KHGQX9D
6. Previous orders - https://imgur.com/CY2PrO3
7. Home screen - https://imgur.com/pXvwnvl

## Links to published expo application:
1) https://expo.io/@frane_caleta/projects/pmf-book-store
2) exp://exp.host/@frane_caleta/pmf-book-store (straight from Expo Go application)


# Below are phases of project development and descriptions on Croatian that were required for my subject at university.

# Projektne faze
- [x] - Opis projekta
- [x] - Početna struktura aplikacije
- [x] - Prototip
- [x] - Konzultacije
- [x] - Finalna verzija
- [x] - Obrana projekta

# Opis projekta
## Kratki opis
Aplikacija za naručivanje knjiga preko interneta (book store).

## Popis funkcionalnosti
1. Prikaz proizvoda
2. Prikaz detalja pojedinog proizvoda
3. Dodavanje proizvoda u košaricu za kupnju
4. Brisanje iz košarice za kupnju
5. Stack i drawer navigator
6. Zapisivanje prethodnih kupnji i njihovih detalja ovisno o korisniku koji ih je naručio
7. Dodavanje novih proizvoda
8. Uređivanje proizvoda (mijenjanje imena, opisa, slike...)
9. Upravljanje stanjima koristeći Redux JS biblioteku
10. Web server (firebase real time database)
11. Autentikacija korisnika, socketi, te spremanje korisnika u bazi podataka
12. "Pull to Refresh"

## UPUTE
## Opis projekta
Opis projekta i popis njegovih funkcionalnosti je prethodno već napisan.

## Početna struktura aplikacije
Koristiti ću 6 različitih ekrana, te stack i drawer navigaciju. 
1. Glavni ekran - sadržavati će popis proizvoda s njihovom cijenom, botunom koji nas vodi na detaljniji opis artikla (drugi ekran), te botunom za dodavanje u košaricu.
Također će kroz sve ekrane biti dostupna i drawer navigacija pomoću koje ćemo moći stisnuti na botune kao što su prethodne narudžbe i dodavanje/uređivanje proizvoda, te odjavljivanje korinika s aplikacije.
2. Ekran za prikaz detalja pojedinog proizvoda - stack navigator
3. Ekran za košaricu (brisanje proizvoda koji su u košarici, te kupnja) - stack navigator
4. Ekran koji prikazuje proizvode koje je trenutni korisnik dodao - drawer navigator - dodavanje novih i uređivanje već postojećih proizvoda
5. Ekran za dodavanje/uređivanje proizvoda - stack navigator - otvara se forma gdje trebamo unijeti ime, cijenu, opis, te url slike proizvoda. Isti ovaj ekran ćemo koristiti i za mijenjanje tj. uređivanje već postojećeg proizvoda. Cijenu proizvoda ne smijemo uređivati kako ne bi došlo do nepoželjnih bugova (npr. ako korisnik već ima taj proizvod u košarici)
6. Ekran za pregled prethodnih narudžbi - drawer navigator - lista prethodnih narudžbi s mogućnosti proširivanja svake narudžbe kako bismo dobili detaljniji opis
7. Početni ekran koji nam služi za autentikaciju korisnika - login/sign up

Sve akcije su povezane s real time bazom podataka (firebase).

## Prototip
U ovoj fazi bi trebali imati "grubu" verziju svoje aplikacije. Ova verzija bi trebala imati implementirane osnovne funkcionalnosti koje su navedene u opisu projekta. Ne očekuje se da su implementirane SVE funkcionalnosti niti da su postojeće funkcionalnosti potpuno ispravne.

## Konzultacije
Nakon izrade prototipa potrebno se javiti nastavniku za termin konzultacija. Na konzultacijama ćete ukratko pokazati svoj prototip te će se po potrebi napraviti modifikacija početnih zahtjeva. Dovršeni projekti bez ove faze neće biti prihvaćeni.

## Finalna verzija
Nakon demonstracije prototipa možete nastaviti sa razvojem aplikacije i implementacijom svih funkcionalnosti. Prilikom razvoja potrebno je voditi dnevnik aktivnosti prema zadanim uputama.

## Obrana projekta
Zadnja faza je obrana projekta - nakon završetka finalne verzije svoje aplikacije javite se nastavniku za dogovor oko termina obrane projekta.

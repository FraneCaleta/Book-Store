# Projektne faze
- [x] - Opis projekta
- [x] - Početna struktura aplikacije
- [ ] - Prototip
- [x] - Konzultacije
- [ ] - Finalna verzija
- [ ] - Obrana projekta

# Opis projekta
## Kratki opis
Aplikacija za kupovanje artikala preko interneta (web shop).

## Popis funkcionalnosti
1. Prikaz artikala
2. Prikaz detalja pojedinog artikla
3. Dodavanje artikla u košaricu za kupnju
4. Brisanje iz košarice za kupnju
5. Stack i drawer navigator
6. Prethodne kupnje i njihovi detalji
7. Dodavanje novih artikala
8. Uređivanje artikala (mijenjanje imena, opisa, slike...)
9. Upravljanje stanjima koristeći Redux JS biblioteku

## UPUTE
## Opis projekta
Opis projekta i popis njegovih funkcionalnosti je prethodno već napisan.

## Početna struktura aplikacije
Koristiti ću 6 različitih ekrana, te stack i drawer navigaciju. 
1. Glavni ekran - sadržavati će popis artikala s njihovom cijenom, botunom koji nas vodi na detaljniji opis artikla (drugi ekran), te botunom za dodavanje u košaricu.
Ovdje će se koristiti drawer navigacija pomoću koje ćemo moći stisnuti na botune kao što su prethodne narudžbe i dodavanje/uređivanje artikala.
2. Ekran za prikaz detalja pojedinog artikla - stack navigator
3. Ekran za košaricu (brisanje artikala koji su u košarici, te kupnja) - stack navigator
4. Ekran koji prikazuje moje produkte - drawer navigator - dodavanje novih artikala i uređivanje već postojećih (pritiskom na ikonicu "+")
5. Ekran za dodavanje/uređivanje artikala - stack navigator - otvara se nekakva forma gdje trebamo unijeti ime, cijenu, opis, te sliku artikla. Isti ovaj ekran ćemo koristiti i za mijenjanje tj. uređivanje već postojećeg artikla. Cijenu artikla ne smijemo uređivati kako ne bi došlo do nepoželjnih bugova (npr. ako korisnik već ima te artikle u košarici)
6. Ekran za pregled prethodnih narudžbi - drawer navigator - lista prethodnih narudžbi s mogućnosti proširivanja svake narudžbe kako bismo dobili detaljniji opis

## Prototip
U ovoj fazi bi trebali imati "grubu" verziju svoje aplikacije. Ova verzija bi trebala imati implementirane osnovne funkcionalnosti koje su navedene u opisu projekta. Ne očekuje se da su implementirane SVE funkcionalnosti niti da su postojeće funkcionalnosti potpuno ispravne.

## Konzultacije
Nakon izrade prototipa potrebno se javiti nastavniku za termin konzultacija. Na konzultacijama ćete ukratko pokazati svoj prototip te će se po potrebi napraviti modifikacija početnih zahtjeva. Dovršeni projekti bez ove faze neće biti prihvaćeni.

## Finalna verzija
Nakon demonstracije prototipa možete nastaviti sa razvojem aplikacije i implementacijom svih funkcionalnosti. Prilikom razvoja potrebno je voditi dnevnik aktivnosti prema zadanim uputama.

## Obrana projekta
Zadnja faza je obrana projekta - nakon završetka finalne verzije svoje aplikacije javite se nastavniku za dogovor oko termina obrane projekta.
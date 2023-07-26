# Immobilien 

Es besteht die Option, Häuser und Wohnungen zu erwerben oder von anderen Spielern zu mieten. Ein Wohnsitz in einer Wohnung oder Haus bringt dem Spieler gewissen Vorteile.

## Der Hauskauf

* Suche nach Häusern/Wohnungen die mit "Kein Besitzer" beschriftet sind.
* Mit **/hausinfo [Nummer]** ruft den Wert des Hauses auf.
* Möchte man die Immobilie kaufen, kann dies mit **/buyhouse [Nummer]** durchgeführt werden.
* Die Immobilie gehört jetzt einem.

## Vermieten / Mieten

Als Hausbesitzer können Mietverträge mit anderen Spielern erstellt werden, welche dann in dieser Immobilie mieten. Diese Spieler zahlen pro Payday einen vordefinierten Betrag in die Hauskasse, auf welche nur der Hausbesitzer Zugriff hat.

* Hausbesitzer und zukünftiger Mieter müssen sich im Hauseingang befinden.
* Der Hausbesitzer gibt den Befehl **/rent [Name] [Hausnummer][Betrag]** ein.
* Der zukünftige Mieter erhält nun eine Anfrage, welche er bestätigen oder ablehnen kann.
* Nimmt er das Angebot an, wird der festgelegte Betrag nun an jedem Payday in die Hauskasse gezahlt.
* Mit **/unrent** kann das Mietverhältnis aufgelöst werden.

!!! warning "Haftpflichtversicherung"
      Die Kosten für die Haftpflichtversicherung steigen bei jedem neuen Mieter!
  
Mieterslots: Jedes Haus hat nur eine bestimmte Anzahl Mieterslots. Um diese zu erhöhen, können im Möbelhaus weitere Mieterplätze erworben werden.

## Die Immobilie verkaufen

Man hat die Möglichkeit sein Haus wieder zu verkaufen. Dies kann man beim Maklerbüro machen lassen. Man findet den Makler mit **/navi maklerbüro**. Das Haus wird zu 50% des Kaufpreises verkauft.

* Gehe zum NPC im Maklerbüro.
* Klicke ihn mit der rechten Maustaste an.
* Wähle das Haus aus, welches du verkaufen möchtest.

!!! warning "Haus verkaufen"
        Ist das Haus einmal verkauft, kann dieses nur durch einen Neukauf zurück erworben werden.

## Hausnummer
Das Haus hat eine vollwertige Adresse mit Straßennamen, Postleitzahl und Hausnummer. Hier hat jedes Stadtteil eine eigende Postteiltzahl, sowie jede Straße eine eigende ID.

### Zusammensetzung
Jedes Haus hat 2 Nummern, welche sich nach Straßen-ID und der eigentlichen Hausnummer zusammen setzen. So ist zum Beispiel Haus 1-22, ein Haus mit der ID 1, welche sich in [Downtown](../../pages/gebiete/downtown.md) befindet. Die 22 bedeutet, dass das Haus das 22te Haus in dieser Straße ist.
### Straßenzuordnung
| Nummer | Gebiet |
|:-:|:-:|
| 1-9; 52 | Downtown |
| 10-15 | [Oststadt](../../pages/gebiete/oststadt.md) |
| 16-25; 49 | [Reichenviertel](../../pages/gebiete/reichenviertel.md) |
| 26-27; 37 | [Strandpassage](../../pages/gebiete/strandpassage.md) |
| 28-32; 51 | [Asia-Viertel](../../pages/gebiete/asiaviertel.md) |
| 33-36; 50; 54 | [County](../../pages/gebiete/county.md) |
| 38-42; 53 | [Westside](../../pages/gebiete/westside.md) |
| 43-48 | [Ganggebiet](../../pages/gebiete/ganggebiet.md) |
   
## Nice to Know 

* Das Haus kann mit einer Drogenbank, einer Hauskasse und Mieterslots ausgestattet werden. Diese können im Möbelhaus mit **/möbelhaus** gekauft werden.
* Mieter können die Türen der Immobilie öffnen und schliessen und den Herd nutzen. Sie haben aber keinen Zugriff auf die Drogenbank oder die Hauskasse.
* Häuser können auch unter Spielern verkauft werden. Dies muss aber über einen [Administrator](../../pages/other/serverteam.md). gemacht werden. Am Besten meldet man sich mit einem Ticket (Accountproblem).

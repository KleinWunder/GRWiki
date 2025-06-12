# Immobilien

Es besteht die Option, Häuser und Wohnungen zu erwerben oder von anderen Spielern zu mieten. Ein Wohnsitz in einer Wohnung oder einem Haus bringt dir gewisse Vorteile.

## Der Hauskauf

* Suche nach Häusern/Wohnungen, die mit "Kein Besitzer" beschriftet sind.
* Mit **/hausinfo [Nummer]** kannst du den Wert des Hauses abfragen.
  * Das Haus kann auf der <a href="https://map.germanrp.eu/#world:106:0:-306:2202:0:0:0:1:flat" target="_bank">Livemap</a> über einen Link angesehen werden.
* Möchtest du die Immobilie kaufen, kannst du dies mit **/buyhouse [Nummer]** tun.
* Die Immobilie gehört nun dir.

## Vermieten / Mieten

Als Hausbesitzer kannst du Mietverträge mit anderen Spielern abschließen, die dann in dieser Immobilie wohnen. Diese Spieler zahlen pro Payday einen vordefinierten Betrag in die Hauskasse, auf die nur der Hausbesitzer Zugriff hat.
Im Makler (**/navi Makler**) kannst du Häuser zum Vermieten anbieten.

* Hausbesitzer und zukünftiger Mieter müssen sich im Hauseingang befinden.
* Der Hausbesitzer gibt den Befehl **/rent [Name] [Hausnummer] [Betrag]** ein.
* Der zukünftige Mieter erhält nun eine Anfrage, die er bestätigen oder ablehnen kann.
* Nimmt er das Angebot an, wird der festgelegte Betrag bei jedem [Payday](../../pages/allgemein/payday.md) in die Hauskasse gezahlt.
* Mit **/unrent** kann das Mietverhältnis aufgelöst werden.

!!! warning "Haftpflichtversicherung"
    Die Kosten für die Haftpflichtversicherung steigen mit jedem neuen Mieter!

Mieterslots: Jedes Haus hat nur eine bestimmte Anzahl an Mieterslots. Um diese zu erhöhen, können im [Möbelhaus](../../pages/orte/möbelhaus.md) weitere Mieterplätze erworben werden.

## Die Immobilie verkaufen

Du hast die Möglichkeit, dein Haus wieder zu verkaufen.

Dabei gibt es zwei Möglichkeiten:

* An einen Spieler verkaufen
* An das Maklerbüro verkaufen

!!! warning "Haus verkaufen"
    Ist das Haus einmal verkauft, kann es nur durch einen Neukauf zurückerworben werden.

### Immobilien an Spieler verkaufen

Das Verkaufen von Immobilien an Spieler ist per **/sellhouse [Haus] [Spieler] [Preis]** möglich. Dabei muss der Preis mindestens dem Mindestpreis der Immobilie entsprechen.

### Immobilien an das Maklerbüro verkaufen

Im Maklerbüro ist es möglich, Immobilien für die Hälfte des Mindestpreises zu verkaufen.
Das Maklerbüro kann unter **/navi Maklerbüro** gefunden werden.

* Gehe zum NPC im Maklerbüro.
* Klicke ihn mit der rechten Maustaste an.
* Wähle das Haus aus, das du verkaufen möchtest.

## Hausnummer

Das Haus hat eine vollwertige Adresse mit Straßennamen, Postleitzahl und Hausnummer. Jeder Stadtteil hat eine eigene Postleitzahl, und jede Straße eine eigene ID.

### Zusammensetzung

Jedes Haus hat 2 Nummern, die sich aus der Straßen-ID und der eigentlichen Hausnummer zusammensetzen. Zum Beispiel ist Haus 1-22 ein Haus mit der ID 1, das sich in [Downtown](../../pages/gebiete/downtown.md) befindet. Die 22 bedeutet, dass es das 22. Haus in dieser Straße ist.

### Straßenzuordnung

| Nummer        | Gebiet                                         |
|:-------------:|:----------------------------------------------:|
| 1-9; 52; 64-74; 80-82; 85-86 | [Downtown](../../pages/gebiete/downtown.md) |
| 10-15, 84; 88 | [Oststadt](../../pages/gebiete/oststadt.md)    |
| 16-25; 49 | [Reichenviertel](../../pages/gebiete/reichenviertel.md) |
| 26-27; 37 | [Strandpassage](../../pages/gebiete/strandpassage.md) |
| 28-32; 51 | [Asia-Viertel](../../pages/gebiete/asiaviertel.md) |
| 33-36; 50; 54 | [County](../../pages/gebiete/county.md)|
| 38-42; 53; 75-78 | [Westside](../../pages/gebiete/westside.md) |
| 43-48; 83 | [Auheim](../../pages/gebiete/auheim.md) |
| 55-63; 79; 87 | [Altstadt](../../pages/gebiete/altstadt.md) |

## Nice to Know

* Das Haus kann mit einem Hauslager, einer Hauskasse, Mieterslots, Waffenlager, Itemlager und Garten ausgestattet werden. Diese können im Möbelhaus mit **/möbelhaus** gekauft werden.
* Mieter können die Türen der Immobilie öffnen und schließen, sowie den Herd nutzen. Sie haben jedoch keinen Zugriff auf das Hauslager oder jegliche Hauserweiterungen.
* Mit **/streetinfo** ist es möglich, eine ID durch einen Straßennamen oder den Straßennamen durch eine ID zu erhalten.


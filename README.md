> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Red Pers
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Red pers is een toegankelijk en inclusief opleidingsplatform dat is bedoeld om jonge, aspirerende journalisten. Bij dit platform kunnen deze jonge journalisten. Het bedrijf bestaat uit circa 50 mensen, die per half jaar doorstroomt om zo meer informatie op te doen over journalistiek. Dit bedrijf is vooral bedoelt om verschillende mensen die geïnteresseerd zijn in journalistiek een plekje tunnen geven in dit platform. Waarbij zij verschillende opdrachten en workshops zijn om hierover meer informatie op te doen.

Sinds juni 2023 is de website gelanceerd (misschien iets te vroeg) waarbij de website is opgezet met Wordpress en Elementor. Hierbij zitten een aantal bugs en is Red Pers geinteresseerd om afstand te doen van Wordpress en het laten opbouwen met code ipv met plugins.

Live link: https://friendly-pants-fawn.cyclic.app/

<img width="336" alt="Scherm­afbeelding 2024-04-05 om 03 55 02" src="https://github.com/zainablfz/the-web-is-for-everyone-interactive-functionality/assets/144009548/f8433829-3445-4164-8dbc-5c58116f107c">
<img width="341" alt="Scherm­afbeelding 2024-04-05 om 04 04 52" src="https://github.com/zainablfz/the-web-is-for-everyone-interactive-functionality/assets/144009548/868d6ccd-812e-47d8-bad0-2e8aab2534ed">




## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

De user story die tijdens dit project gehanteerd werd is: `Als gebruiker wil ik een artikel link kunnen kopiëren en kunnen zien hoevaak deze link is gekopieerd.`

De website bestaat uit een overzichtspagina van de artikelen (home) en een detailpagina van het desbetreffende artikel. 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

Voor deze website is onder andere gebruik gemaakt van Node, Express en EJS en gebruikt de data van de WordPress API en Directus om de shares te posten. In de CSS heb ik gebruik gemaakt van custom properties. 

Ik heb gewerkt volgens Progressive Enhancement, dit houdt in dat je werkt in drie lagen om de website functioneel en vertrouwelijk te maken. De drie verschillende lagen houden als volgt in:

De eerste laag is de core functionality en dat begint bij de HTML. Dit zorgt ervoor dat de (main) content te lezen is op de website en het acceptabel is per browser/device, oftewel dat de website functioneel is en vertrouwelijk. De volgende laag is de CSS zodat de website usable is, waarbij de basic CSS is geïmplementeerd De derde laag is de enhancement laag, waarbij er extra CSS en/of JS erbij komt, die de website pleasurable maakt.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

* Fork deze repository
* Clone de repository op eigen apparaat
* Gebruik editor naar keuze
* Run de command npm install
* Run de command npm start


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

import React, { FC } from "react";
import * as PS from "../PageStyle";
import * as S from "./AboutStyle";

interface AboutProps {

}

export const About: FC<AboutProps> = (props) => {
  return (
    <PS.Page>
      <h2>Code challenge brainstorm</h2>

      <S.Section>
        <strong>Brainstorm:</strong>
        <ul>
          <li> Klein ontwerp</li>
          <li> CRA, TypeScript, D3.js, styled components, react router, fetch, react testing library, hooks, context</li>
          <li> Tegels in css grid, andere elementen in flex</li>
          <li> 3 tegels</li>
          <li>     grafiekje van temperatuur / neerslag afgelopen 24 uur (instelbaar?)</li>
          <li>     Weer van vandaag </li>
          <li>     Derde tegel? Forecast?</li>
          <li> Vragen om locatie te gebruiken en kijken waar je bent (Location API)</li>
          <li> Responsive</li>
          <li> Paar unittests</li>
          <li> Paar end to end tests</li>
          <li> Denk erom waar je api key opslaat e.d. (kleine nodeJS server als proxy?)</li>
          <li> pushen op Heroku of GitHub pages</li>
          <li> readme</li>
          <li> Code op GitHub zetten, gebruiken echte commits</li>
          <li> Iets leuks qua menu navigatie o.i.d.</li>
          <li> Switch between light and dark mode (theme op de context)</li>
          <li> Media query groottes op de context zetten</li>
          <li> Denk ook aan accessibilty, welke html elementen je gebruikt.</li>
          <li> Nuttig commentaar bij elke functie</li>
          <li> 404 pagina en error handling als er iets mis gaat bij api call b.v.</li>
          <li> Rekening houden met traag internet, dus placeholders voor de tegels totdat de images en api data binnen is</li>
          <li> Tree shaking</li>
          <li> Cors in CRA kan via package.json</li>
          <li> Kleuren in een simpel thema object op de context</li>
          <li> Achtergrond van kaart/tegel veranderd aan hand van weertype</li>
          <li> Iets met instelbare talen?</li>
          <li> Meerdere locaties opslaan ergens, minimaal 1 geselecteerd hebben anders default empty en popup voor je neus</li>
          <li> Css reset styled components</li>
          <li> Favicon en logootje</li>
          <li> Manifest goed zetten</li>
          <li> Simpele custom hook ergens gebruiken?</li>
          <li> Gebruik suspense voor Lazy Loaden van een tegel?</li>
          <li> Gebruik eslint</li>
        </ul>

      </S.Section>
      <S.Section>
        <strong>Reasoning:</strong>
        <ul>
          <li>  Mark initially said I did not have to do the code test because he already knows what I can do, but I though it was a fun exercise so I wanted to do it</li>
          <li>  I wanted to do it in Angular to update my knowledge but I didn’t have much time so I stuck with React. But I am definitely planning to do a refresh course on Angular soon.</li>
          <li>  React and D3 are my specialty and I really like working with those libraries, also React itself is lightweight and suitable for a small app like this.</li>
          <li>  Not done a npm audit fix because it would revert react scripts from v5 to v2</li>
          <li>  Styled components are handy because of reusability of styling and no need to think of classnames and of course the power of javascript</li>
          <li>  No redux(toolkit) because app state is not that complex or big and would take to much time</li>
          <li>  Decided to use own icons (materialui) instead of supplied ones, after consulting with the designer of course ;)</li>
          <li>  Did some arialabel and tried to be as symantic as possible regarding the html tags, but did not spend to much time on it because of deadline.</li>
          <li>  Cards get their own data. Plus side is that the cards are independent and can be put anywhere in the app and just work, downside is that multiple api calls are done which could have been merged. Can save performance and user experience by caching fetched data and using skeleton images / suspense</li>
          <li>  D3 written in D3 syntax because of time constraints.</li>
          <li>  Appconfig is in public folder so it can be edited without having to deploy again (should use a hash code to break caching)</li>
        </ul>
      </S.Section>
      <S.Section>
        <strong>Val kuilen:</strong>
        <ul>
          <li> Ik heb mezelf 40 uur gegeven, dinsdag om 1 uur begonnen.</li>
          <li> Ik kan hier helemaal op los gaan met allemaal toeters en bellen en 100% unittest coverage en nieuwe libraries die ik nog niet ken gebruiken maar dat kost veel te veel tijd. Daarom een deadline gesteld en een max aantal werkuren en een prioritering in alles wat ik in de app zou willen verwerken</li>
          <li> Het is niet perse nodig om het hele wiel opnieuw uit te vinden. Pak code erbij die al eens geschreven hebt om als voorbeeld te dienen.</li>
          <li> Deadline zorgde ervoor dat ik wat slordiger was dan anders, maar zorgde er tegelijkertijd voor dat het einddoel voor ogen bleef houden</li>
        </ul>
      </S.Section>

      <S.Section>
        <strong> Aandachtspunten:</strong>
        <ul>
          <li> Ontwerp</li>
          <li> Useable en secure</li>
          <li> Responsiveness</li>
          <li> Performance</li>
          <li> Location</li>
          <li> Https</li>
          <li> Api key veilig</li>
          <li> Project daadwerkelijk te builden en te runnen</li>
          <li> Project opzet en structuur</li>
          <li> gelaagdheid</li>
          <li> Single responsibility principle</li>
          <li> herbruikheid onderdelen</li>
          <li> Navigatie, 404 en foutafhandeling</li>
          <li> Nuttig commentaar bij code + readme</li>
          <li> Unittests</li>
          <li> View (grafiek)</li>
          <li> Business logic</li>
          <li> Mocked van api</li>
          <li> Light en dark mode — opslaan met local storage</li>
          <li> End to end tests?</li>
          <li> Niet vergeten</li>
          <li> Favicon en klein logo</li>
          <li> Robots txt</li>
          <li> Manifest.json</li>
          <li> .nvmrc</li>
          <li> Other ‘gimmicks’ en features</li>
          <li> Screen reader ready(?)</li>
          <li> Nodejs backend</li>
          <li> Server side rendering</li>
          <li> Reduxtoolkit</li>
          <li> weerkaartje</li>
          <li> Meerdere locaties tegelijk</li>
          <li> Storybook</li>
          <li> TypeDoc</li>
        </ul>
      </S.Section>

      <S.Section>

        <strong>Design:</strong>
        <ul>
          <li> Als voorbeeld gebruikt: https://www.uplabs.com/posts/weatherappfreebie</li>
          <li> Links menu item die menu opent vanaf zijkant. Menu kant weer gesloten worden.</li>
          <li> Titel is de plaatsnaam</li>
          <li> Rechts een switchknop voor darkmode</li>
          <li> Rechts een zoekknop die een popup opent om plaatsnaam te selecteren</li>
          <li> Tegel van vandaag met temperatuur e.d.</li>
          <li> Kleinere tegeltjes met weer van komende dagen</li>
          <li> Als je klikt op een kleinere tegel komt er een popup met per uur</li>
          <li> Tegel met temperatuur + neerslag in grafiek van de afgelopen of komende 24 uur en knopjes naar 3 dagen en 7 dagen (forecast?)</li>
          <li> Responsiveness m.b.t. plaatsing van tegels</li>
          <li> Ook responsiveness binnen een tegel?</li>
        </ul>
      </S.Section>

      <S.Section>
        <strong>In readme zetten:</strong>
        <ul>
          <li>   Kleine intro</li>
          <li> Hoe te installeren, runnen en testen, Heroku url</li>
          <li> verwijzing naar design</li>
          <li> Opsomming van libs en waarom</li>
          <li> Cors opgelost met cra (hoefde niks te doen..)</li>
          <li> Uitleg van weather app api key en dat je die eigenlijk aan de server kant moet zetten en niet op GitHub</li>
          <li> Node en npm versie</li>
          <li> Appconfig.json</li>
          <li> Visual studio code gebruikt, belangrijk extensies: vscodestyledcomponents, tshero,</li>
          <li> Material ui icoontjes icoontjes</li>
          <li> Api heeft max 5 dagen gratis. Mockdata is mooier om te zien, meer data (dev mode in url query zetten?)</li>
          <li> Getest in chrome, safari, firefox, brave en android mobiel en tablet chrome</li>
        </ul>
      </S.Section>
      <S.Section>

        <strong>Prioritering om deadline te halen:</strong><br />
        <strong>Moeten:</strong>
        <ul>
          <li> Cards</li>
          <li> WeatherApi service</li>
          <li> Chart</li>
          <li> Chart op weatherservice</li>
          <li> Location service en input (input fout afhandeling)</li>
          <li> Menu, router (lazy load pagina’s?) en 404</li>
          <li> paar unittests (minimaal 1 per folder)</li>
          <li> 1 end to end test met mocking van de api</li>
          <li> Comments, readme, build en deploy</li>
          <li> Simpele foutafhandeling voor b.v. als api call niet goed gaat</li>
          <li> Kleine dingen als de manifest file, readme in elke folder, etc.</li>
          <li> Install en build controleren</li>
          <li> Op Heroku zetten</li>
        </ul>
      </S.Section>
      <S.Section>

        <strong>Mogen:</strong>
        <ul>
          <li> Min en max temp van de hele dag zoeken zodat ze verschillen</li>
          <li> Skeleton images</li>
          <li> X Location search popup</li>
          <li> Card popover</li>
          <li> Dark mode</li>
          <li> Zo veel mogelijk unittests</li>
          <li> Loading met ‘launcher’ icoontje die popupped en verdwijnt</li>
          <li> Cardscroller knoppen links rechts</li>
        </ul>
      </S.Section>
      <S.Section>
        <strong>Links:</strong>
        <ul>
          <li><a href="https://withblue.ink/2020/06/07/isthisadependencyordevdependency.html"> https://withblue.ink/2020/06/07/isthisadependencyordevdependency.html</a></li>
          <li><a href="https://blog.webdevsimplified.com/202207/reactfolderstructure/"> https://blog.webdevsimplified.com/202207/reactfolderstructure/</a></li>
          <li><a href="https://khalilstemmler.com/blogs/typescript/eslintfortypescript/"> https://khalilstemmler.com/blogs/typescript/eslintfortypescript/</a></li>
          <li><a href="https://blog.logrocket.com/usingbarrelexportsorganizereactcomponents/"> https://blog.logrocket.com/usingbarrelexportsorganizereactcomponents/</a></li>
          <li><a href="https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Outlined"> https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Outlined</a></li>
        </ul>
      </S.Section>
    </PS.Page>
  );
};
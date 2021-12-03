# Projektdokumentation

#### Navn: Oliver Rindholt

##### Hold: 1146521c105 / WU06

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](http://nogether.netlify.com/)


## Teknologier

-   HTML
-   CSS/SASS
-   JavaScript
-   Gulp
-   ...

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

- Gulp

Gulp er en task manager, som bliver fx. kan blive brugt til at compile SASS om til CSS og JS til mindre versioner.

- Gulp-babel

Babel bliver brugt med hjælp fra Gulp til at konventere nyt ES6 syntax om til ældre versioner af JavaScript, som alle browsere støtter.

- Gulp-rename

Rename bliver brugt til at omdøbbe filer til noget andet. Som fx. "index.min.js". Så det er nemmere at forstå hvilke filer er hvilke.

- Gulp-uglify

Uglify bliver brugt til at forminske JavaScript til en enkelt linje, så de mindre filer som bliver læst af browseren fylder mindre.

- Gulp-sass

Gulp SASS er en package som gør det muligt at compile SASS til CSS med Gulp.

- SASS

SASS er den package vi skal bruge for at vores projekt forstår SASS, og for at vi har mulighed for at skrive det uden fejl.

- Gulp-purgecss

PurgeCSS bliver brugt til at fjerne alt unødvendig CSS fra en fil som ikke bliver brugt i vores markup HTML.

- Toastify (CDN)

Toastify bliver brugt til at lave små pop-ups, til når vi fx. gemmer en artikel.

- Axios (CDN)

Axios er en promise-based HTTP client, som bliver brugt til at fetche data fra et api.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

1. I mit animations valg, har jeg valgt at lave nogle simple animationer som passer til- og er behagelige for mobil-brugere at se på. 
2. I mit farvebrug har jeg brugt forskellige toner til "Dark Mode" som også er behage for brugeren.
3. I mit brug af gulp packages har jeg taget højde for at mine filer skal være så kompakte som muligt så det tager så lidt tid af indlæse.


---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Min kæle-skildpadde havde det heldigvis rigtigt godt i denne praktikperiode. Så jeg synes jeg klarede det rimeligt. Jeg nåede i mål med det jeg sat mig for. Og synes generelt jeg fik et godt resultat.

---
### En beskrivelse af særlige punkter til bedømmelse

Jeg synes min search funktion blev nogenlunde gennemført på få linjer kode. Jeg lærte især meget om "regular expressions", og med det synes jeg den virker rimelig godt.
```js
document.querySelector(".Nav__search__input").addEventListener("input", (e) => {
    let inputText = e.target.value;
    let regEx = new RegExp(String.raw`${inputText}`, 'gi');
    document.querySelectorAll(".Card").forEach(card => {
        let headerText = card.querySelector(".Card__title").textContent;
        if(card.style.display) card.style.removeProperty("display");
        if(!regEx.test(headerText)){
            card.style.display = "none";
        }
    });
});
```

Jeg var også nogenlunde glad for min dark mode funktionalitet i SASS. Jeg ville dog havde været gladere hvis jeg kunne have nået at gennemskue en bedre måde at gøre det på med fx. SASS variabler, og mindre statisk kode.
```scss
:root {
    @each $key, $val in $colors {
        --#{$key}: #{$val};
    }
}

.dark-theme {
    --sage: #{darken(map-get($colors, "sage"), 20%)};
    --snow: #{map-get($colors, "onyx")};
    --ice: #{lighten(map-get($colors, "onyx"), 10%)};
    --fossil: #{map-get($colors, "black")};
    --black: #{map-get($colors, "snow")};
    --drab: #{map-get($colors, "ice")};
}
```


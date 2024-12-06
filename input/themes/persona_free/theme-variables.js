/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function (params) {
  let fontParams = {
    'system-ui': {
      name: 'SystemUI',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      hasItalic: false
    },
    'adventpro': {
      name: 'Advent Pro',
      family: '\'Advent Pro\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'aleo': {
      name: 'Aleo',
      family: '\'Aleo\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'andadapro': {
      name: 'Andada Pro',
      family: '\'Andada Pro\', serif',
      weight: '400 840',
      hasItalic: true
    },
    'antonio': {
      name: 'Antonio',
      family: '\'Antonio\', sans-serif',
      weight: '100 700',
      hasItalic: false
    },
    'archivonarrow': {
      name: 'Archivo Narrow',
      family: '\'Archivo Narrow\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'asap': {
      name: 'Asap',
      family: '\'Asap\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'assistant': {
      name: 'Assistant',
      family: '\'Assistant\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'besley': {
      name: 'Besley',
      family: '\'Besley\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'bitter': {
      name: 'Bitter',
      family: '\'Bitter\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'brygada1918': {
      name: 'Brygada 1918',
      family: '\'Brygada 1918\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'cabin': {
      name: 'Cabin',
      family: '\'Cabin\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'cairo': {
      name: 'Cairo',
      family: '\'Cairo\', sans-serif',
      weight: '200 1000',
      hasItalic: false
    },
    'comfortaa': {
      name: 'Comfortaa',
      family: '\'Comfortaa\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'dancingscript': {
      name: 'Dancing Script',
      family: '\'Dancing Script\', cursive',
      weight: '400 700',
      hasItalic: false
    },
    'dosis': {
      name: 'Dosis',
      family: '\'Dosis\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'domine': {
      name: 'Domine',
      family: '\'Domine\', serif',
      weight: '400 700',
      hasItalic: false
    },
    'exo': {
      name: 'Exo',
      family: '\'Exo\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'faustina': {
      name: 'Faustina',
      family: '\'Faustina\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'figtree': {
      name: 'Figtree',
      family: '\'Figtree\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'frankruhllibre': {
      name: 'Frank Ruhl Libre',
      family: '\'Frank Ruhl Libre\', serif',
      weight: '300 900',
      hasItalic: false
    },
    'glory': {
      name: 'Glory',
      family: '\'Glory\', sans-serif',
      weight: '100 800',
      hasItalic: true
    },
    'gluten': {
      name: 'Gluten',
      family: '\'Gluten\', cursive',
      weight: '100 900',
      hasItalic: false
    },
    'heebo': {
      name: 'Heebo',
      family: '\'Heebo\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'imbue': {
      name: 'Imbue',
      family: '\'Imbue\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'instrumentsans': {
      name: 'Instrument Sans',
      family: '\'Instrument Sans\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'jetbrainsmono': {
      name: 'JetBrains Mono',
      family: '\'JetBrains Mono\', monospace',
      weight: '100 800',
      hasItalic: true
    },
    'jura': {
      name: 'Jura',
      family: '\'Jura\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'karla': {
      name: 'Karla',
      family: '\'Karla\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'kreon': {
      name: 'Kreon',
      family: '\'Kreon\', serif',
      weight: '300 700',
      hasItalic: false
    },
    'labrada': {
      name: 'Labrada',
      family: '\'Labrada\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'lemonada': {
      name: 'Lemonada',
      family: '\'Lemonada\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'lexend': {
      name: 'Lexend',
      family: '\'Lexend\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'librefranklin': {
      name: 'Libre Franklin',
      family: '\'Libre Franklin\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'lora': {
      name: 'Lora',
      family: '\'Lora\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'manuale': {
      name: 'Manuale',
      family: '\'Manuale\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'manrope': {
      name: 'Manrope',
      family: '\'Manrope\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'mavenpro': {
      name: 'Maven Pro',
      family: '\'Maven Pro\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'merriweathersans': {
      name: 'Merriweather Sans',
      family: '\'Merriweather Sans\', sans-serif',
      weight: '300 800',
      hasItalic: true
    },
    'montserrat': {
      name: 'Montserrat',
      family: '\'Montserrat\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'nunito': {
      name: 'Nunito',
      family: '\'Nunito\', sans-serif',
      weight: '200 1000',
      hasItalic: true
    },
    'orbitron': {
      name: 'Orbitron',
      family: '\'Orbitron\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'oswald': {
      name: 'Oswald',
      family: '\'Oswald\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'petrona': {
      name: 'Petrona',
      family: '\'Petrona\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'playfairdisplay': {
      name: 'Playfair Display',
      family: '\'Playfair Display\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'plusjakartasans': {
      name: 'Plus Jakarta Sans',
      family: '\'Plus Jakarta Sans\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'publicsans': {
      name: 'Public Sans',
      family: '\'Public Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'quicksand': {
      name: 'Quicksand',
      family: '\'Quicksand\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'raleway': {
      name: 'Raleway',
      family: '\'Raleway\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'redhatdisplay': {
      name: 'Red Hat Display',
      family: '\'Red Hat Display\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'redhatmono': {
      name: 'Red Hat Mono',
      family: '\'Red Hat Mono\', monospace',
      weight: '300 700',
      hasItalic: true
    },
    'robotoflex': {
      name: 'Roboto Flex',
      family: '\'Roboto Flex\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'robotoslab': {
      name: 'Roboto Slab',
      family: '\'Roboto Slab\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'rokkitt': {
      name: 'Rokkitt',
      family: '\'Rokkitt\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'rubik': {
      name: 'Rubik',
      family: '\'Rubik\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'ruda': {
      name: 'Ruda',
      family: '\'Ruda\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'smoochsans': {
      name: 'Smooch Sans',
      family: '\'Smooch Sans\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'sourcecodepro': {
      name: 'Source Code Pro',
      family: '\'Source Code Pro\', monospace',
      weight: '200 900',
      hasItalic: true
    },
    'spartan': {
      name: 'Spartan',
      family: '\'Spartan\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'urbanist': {
      name: 'Urbanist',
      family: '\'Urbanist\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'worksans': {
      name: 'Work Sans',
      family: '\'Work Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'yanonekaffeesatz': {
      name: 'Yanone Kaffeesatz',
      family: '\'Yanone Kaffeesatz\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'yrsa': {
      name: 'Yrsa',
      family: '\'Yrsa\', serif',
      weight: '300 700',
      hasItalic: true
    }
  };

  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight = fontParams[params.fontBody]?.weight;
  let fontBodyHasItalic = fontParams[params.fontBody]?.hasItalic;

  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  let fontHeadingsHasItalic = fontParams[params.fontHeadings]?.hasItalic;

  let output = '';
  let loadedFonts = new Set();

  const addFontFace = (key, name, weight, hasItalic) => {
    if (!loadedFonts.has(name)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}.woff2') format('woff2');
          font-weight: ${weight};
          font-display: swap;
          font-style: normal;
        }
      `;
      loadedFonts.add(name);
    }
    if (hasItalic && !loadedFonts.has(`${name}-italic`)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}-italic.woff2') format('woff2');
          font-weight: ${weight}; 
          font-display: swap;
          font-style: italic;
        }
      `;
      loadedFonts.add(`${name}-italic`);
    }
  };

  if (params.fontBody !== 'system-ui') {
    addFontFace(params.fontBody, fontBodyName, fontBodyWeight, params.fontBodyItalic && fontBodyHasItalic);
  }

  if (params.fontHeadings !== 'system-ui') {
    addFontFace(params.fontHeadings, fontHeadingsName, fontHeadingsWeight, params.fontHeadingsItalic && fontHeadingsHasItalic);
  }

  if (params.fontMenu === 'system-ui') {
    params.fontMenu = fontParams['system-ui'].family;
  }

  if (params.fontLogo === 'system-ui') {
    params.fontLogo = fontParams['system-ui'].family;
  }

  // Fluid base font-size
  const minScreen = 20; // rem
  const maxScreen = 100; // rem
  const screenRange = maxScreen - minScreen;
  const minFontSize = params.minFontSize;
  const maxFontSize = params.maxFontSize;
  const fontSizeRange = maxFontSize - minFontSize;
  const fontSizeValue = `clamp(${minFontSize}rem, ${minFontSize}rem + (${fontSizeRange} * ((100vw - ${minScreen}rem) / ${screenRange})), ${maxFontSize}rem)`;

  output += `  
      :root {
         --page-margin:           ${params.pageMargin};
         --page-width:            ${params.pageWidth};
         --entry-width:           ${params.entryWidth}; 
         --navbar-height:         3rem;
         --border-radius:         3px;
         --cards-gap:             1rem;
         --featured-image-height: ${params.featuredImageHeight}; 
         --animated-lines-time:   ${params.animatedLinesDuration}s; 
         --gallery-gap:           ${params.galleryItemGap}; 
         --magic-number:          4rem;
         --baseline:              .25rem;
         --font-body:             ${fontBodyFamily};
         --font-heading:          ${fontHeadingsFamily};
         --font-logo:             ${params.fontLogo};
         --font-menu:             ${params.fontMenu};
         --font-size:          ${fontSizeValue};
         --font-weight-normal:    ${params.fontBodyWeight}; 
         --font-weight-bold:      ${params.fontBoldWeight}; 
         --line-height:           ${params.lineHeight};
         --letter-spacing:        ${params.letterSpacing}em;  
         --headings-weight:       ${params.fontHeadignsWeight};
         --headings-transform:    ${params.fontHeadingsTransform};
         --headings-style:        ${params.fontHeadingsStyle};
         --headings-letter-spacing: ${params.fontHeadingsletterSpacing}em;
         --headings-line-height:  ${params.fontHeadingsLineHeight};
    `;

    if(params.cardsImageHeight != 'auto') {
      output += `             
         --card-image-height: calc(${params.cardsImageHeight} + 13vmin);
      `;
    } else {
        output += ` 
          --card-image-height: auto;
       `;
    }

    if(params.colorScheme === 'violet') {
      output += `             
          --white: #FFFFFF;
          --black: #000000;
          --green: #00C899;
          --blue: #3DBFE2;
          --red: #EB7F9B;
          --yellow:#FFC76B;
          --dark: #283149;
          --dark-rgb: 40, 49, 73;
          --gray-1: #5f5f74;
          --gray-2: #9196A2;
          --light: #d4d2e1;
          --lighter: #DBDDE6;
          --color: #6f689b;
          --color-rgb: 111, 104, 155;
          --page-bg: linear-gradient(110deg, rgba(215,218,227,1) 0%, rgba(242,243,248,1) 100%);
          --text-color: #343435;
          --headings-color: #283149;
          --link-color: #6f689b;
          --link-color-hover: #283149;
          --inline-code: 255, 81, 81;
      `;
    }

    if(params.colorScheme === 'custom') {
      output += `             
         --white:            ${params.white};
         --black:            ${params.black}; 
         --green:            ${params.green}; 
         --blue:             ${params.blue}; 
         --red:              ${params.red}; 
         --yellow:           ${params.yellow}; 
         --dark:             ${params.dark}; 
         --dark-rgb:         ${params.dark.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
         --gray-1:           ${params.gray1}; 
         --gray-2:           ${params.gray2}; 
         --gray:             ${params.gray}; 
         --light:            ${params.light}; 
         --lighter:          ${params.lighter}; 
         --color:            ${params.color};
         --color-rgb:        ${params.color.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')}; 
         --page-bg:          ${params.pageBg}; 
         --text-color:       ${params.textColor}; 
         --headings-color:   ${params.headingsColor}; 
         --link-color:       ${params.linkColor}; 
         --link-color-hover: ${params.linkColorHover}; 
         --inline-code:       255, 81, 81;
      `;
   }

  output += `
    --box-shadow:
        0px 4.4px 4.5px -100px rgba(var(--dark-rgb), 0.174),
        0px 12.3px 12.5px -100px rgba(var(--dark-rgb), 0.25),
        0px 29.5px 30.1px -100px rgba(var(--dark-rgb), 0.326),
        0px 98px 100px -100px rgba(var(--dark-rgb), 0.5);
    --box-shadow-hover:
        0px 5.4px 4.5px -100px rgba(var(--dark-rgb), 0.174),
        0px 15px 12.5px -100px rgba(var(--dark-rgb), 0.25),
        0px 36.2px 30.1px -100px rgba(var(--dark-rgb), 0.326),
        0px 120px 100px -100px rgba(var(--dark-rgb), 0.5);
  }`; 

  output += `   
    @media all and (min-width: 56.25em) {
      :root {
        --magic-number: 6rem;
      }
    }
    @media all and (min-width: 80.0625em) and (min-height: 50em) {
      :root {
        --cards-gap: 1.8rem;
        --magic-number: 8rem;
      }
    }                      
  `;  

return output;
}

module.exports = generateThemeVariables;
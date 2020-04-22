minimalNix = {
    base04: "#000000",
    base03: "#000000",
    base02: "#ffffff",
    base01: "#000000",
    base00: "#b44127",
    base0: "#69844e",
    base1: "#e3ba7f",
    base2: "#4b698a",
    base3: "#c48787",
    yellow: "#92bed5",
    orange: "#d2e9f1",
    red: "#8f8481",
    magenta: "#d84f30",
    violet: "#87aa64",
    blue: "#ffe69b",
    cyan: "#4b698a",
    green: "#e09a9a"
}

 solarizedDark = {
    base04: "#000000", //not sure here
    base03:  "#002b37",
    base02:  "#073642",
    base01:  "#586e75",
    base00:  "#657b83",
    base0:  "#839496",
    base1:  "#93a1a1",
    base2:  "#eee8d5",
    base3: "#fdf6e3",
    yellow:  "#b58900",
    orange:  "#cb4b16",
    red:     "#dc322f",
    magenta: "#d33682",
    violet:  "#6c71c4",
    blue:    "#268bd2",
    cyan:    "#2aa198",
    green:   "#859900"
 }           

gruvboxDark = {
    base04:  "#1D2021",
    base03:  "#282828",
    base02:  "#3c3836",
    base01:  "#7c6f64",
    base00:  "#7c6f64",
    base0:   "#928374",
    base1:   "#928374",
    base2:   "#f9f5d7",
    base3:   "#f2e5bc",
    dark1:   "#504945",
    dark2:   "#665c54",
    red:     "#fb4934",
    green:   "#b8bb26",
    yellow:  "#fabd2f",
    blue:    "#83a598",
    magenta: "#d3869b",
    cyan:    "#8ec07c",
    orange:  "#fe8019"
    /*
    --neutral_red: #cc241d;
    --neutral_green: #98971a;
    --neutral_yellow: #d79921;
    --neutral_blue: #458588;
    --neutral_purple: #b16286;
    --neutral_aqua: #689d6a;
    --neutral_orange: #d65d0e;

    --faded_red: #9d0006;
    --faded_green: #79740e;
    --faded_yellow: #b57614;
    --faded_blue: #076678;
    --faded_purple: #8f3f71;
    --faded_aqua: #427b58;
    --faded_orange: #af3a03; 
    */
}
    
cyberpunkBlack =  {
    base04:  "black",
    base03:  "black",
    base02:  "black",
    base01:  "grey",
    base00:  "grey",
    base0:   "white",
    base1:   "#928374",
    base2:   "#f9f5d7",
    base3:   "#f2e5bc",
    red:     "#ff00ea",
    green:   "#ff00ea",
    yellow:  "#fabd2f",
    blue:    "#00ffea",
    magenta: "#ff00ea",
    cyan:    "#00ffea",
    orange:  "#00ffea"
}

cyberpunkLowContrast = {
    base04:  "#110511", 
    base03:  "#110511",
    base02:  "#110511",
    base01:  "#2E243D",
    base00:  "#2E243D",
    base0:   "#706970",
    base1:   "#706970",
    base2:   "#ffffff",
    base3:   "#ffffff",
    red:     "#930a6d",
    green:   "#12BC00",
    yellow:  "#12BC00",
    blue:    "#00b7c3",
    magenta: "#ea0eaa",
    cyan:    "#00b7c3",
    orange:  "#00b7c3"
}

materialOcean = {
    base04:  "#0F111A", 
    base03:  "#090B10",
    base02:  "#0F111A",
    base01:  "#464B5D",
    base00:  "#3B3F51",
    base0:   "#8F93A2",
    base1:   "#8F93A2",
    base2:   "#ffffff",
    base3:   "#ffffff",
    red: "#ff5370",
    green: "#c3e88d",
    yellow: "#ffcb6b",
    blue: "#82aaff",
    magenta: "#c792ea",
    cyan: "#89ddff",
    orange : "#ff5370",
    
/* 
        "white": "#ffffff",
        "brightBlack": "#546e7a",
        "orange" : "#ff5370",
        "brightGreen": "#c3e88d",
        "brightYellow": "#ffcb6b",
        "brightBlue": "#82aaff",
        "brightPurple": "#c792ea",
        "brightCyan": "#89ddff",
        "brightWhite": "#ffffff",
        "background": "#0f111a",
        "foreground": "#8f93a2"
*/

}
horizonDark = {
    base04:  "#1C1E26", 
    base03:  "#1C1E26", //background
    base02:  "#1C1E26",
    base01:  "#4C4D53", //comments
    base00:  "#4C4D53", // border
    base0:   "#E4A88A", // text
    base1:   "#1C1E26",
    base2:   "#1C1E26",
    base3:   "#1C1E26",
    cyan:    "#E95378",
    blue:    "#A96ECA",
    yellow:  "#E4A88A",
    green:   "#24A2AE",
    magenta: "#A96ECA",
    red:     "#24A2AE",
    orange : "#DB8864",
    
}

availableThemes = [solarizedDark, gruvboxDark, cyberpunkLowContrast, materialOcean, horizonDark];

cycleThemes(2);

var themesButton = document.getElementById("themes"); 
themesButton.addEventListener("click", cycleThemes, false);

function cycleThemes(themeIndex=(Math.floor(Math.random() * availableThemes.length))) {

    document.documentElement.style.setProperty('--base04',  availableThemes[themeIndex].base04);
    document.documentElement.style.setProperty('--base03',  availableThemes[themeIndex].base03);
    document.documentElement.style.setProperty('--base02',  availableThemes[themeIndex].base02);
    document.documentElement.style.setProperty('--base01',  availableThemes[themeIndex].base01);
    document.documentElement.style.setProperty('--base00',  availableThemes[themeIndex].base00);
    document.documentElement.style.setProperty('--dark1',   availableThemes[themeIndex].dark1);
    document.documentElement.style.setProperty('--dark2',   availableThemes[themeIndex].dark2);
    document.documentElement.style.setProperty('--base0',   availableThemes[themeIndex].base0);
    document.documentElement.style.setProperty('--base1',   availableThemes[themeIndex].base1);
    document.documentElement.style.setProperty('--base2',   availableThemes[themeIndex].base2);
    document.documentElement.style.setProperty('--base3',   availableThemes[themeIndex].base3);
    document.documentElement.style.setProperty('--red',     availableThemes[themeIndex].red);
    document.documentElement.style.setProperty('--green',   availableThemes[themeIndex].green);
    document.documentElement.style.setProperty('--yellow',  availableThemes[themeIndex].yellow);
    document.documentElement.style.setProperty('--blue',    availableThemes[themeIndex].blue);
    document.documentElement.style.setProperty('--magenta', availableThemes[themeIndex].magenta);
    document.documentElement.style.setProperty('--cyan',    availableThemes[themeIndex].cyan);
    document.documentElement.style.setProperty('--orange',  availableThemes[themeIndex].orange);

}

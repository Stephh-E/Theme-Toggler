console.log("CSS Theme toggler loaded and running!");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "darkgrey",
            fontColour: "white",
            "theme-100": "#4641d1"
        }
    },

    {
        name: "light",
        properties: {
            backgroundColour: "#87E0E0",
            fontColour: "black",
            "theme-100": "#87E0E0"
        }
    }
];

// Read theme name stored in local storage
// Updates CSS variables based on that name 
function getChosenTheme(){
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;

}

// Set theme name to local storage
// and updates CSS variables based on that name 
function setChosenTheme(newThemeName) {
    localStorage.setItem("theme", newThemeName);
    updateCssVariables();
}

if (getChosenTheme() == null){
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      setChosenTheme("dark");
    } else {
      // Theme set to light.
      setChosenTheme("light");
    }
}

let =themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.onclick = toggleTheme
// themeToggleBUtton.addEventListener("click", toggleTheme);

// Loop theme name to local storage
// and apply those properties to CSS
function updateCssVariables() {

}


let rootElement = document.querySelector(":root");

function getVariablesFromCSS() {
    console.log(rootElement);

    //console.log(documentElement.style.getPropertyValue("--backgroundcolour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue)

}

getVariablesFromCSS();
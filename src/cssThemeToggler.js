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

            fontColour: "black"

            ,

            "theme-100": "#87E0E0"

        }

    }

];

let rootElement = document.querySelector(":root");

function getVariablesFromCSS() {
    console.log(rootElement);

    //console.log(documentElement.style.getPropertyValue("--backgroundcolour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue)

}

getVariablesFromCSS():
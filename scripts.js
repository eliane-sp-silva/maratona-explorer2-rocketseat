const body = document.querySelector("body")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
  bgColor: getStyle(body, "--bg-color"),
  textColor: getStyle(body, "--text-color"),
  primaryColor: getStyle(body, "--primary-color"),
  primaryColorDark: getStyle(body, "--primary-color-dark"),
}

const darkMode = {
  bgColor:"#1F000B",
  textColor: "#FFF0F6",
  primaryColor: "#D6336C",
  primaryColorDark: "#A61E4D"
   
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => { 
    Object.keys(colors).map(key => 
        body.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
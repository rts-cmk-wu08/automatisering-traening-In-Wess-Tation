import proSection from "./proSection.js"
import "./promoveringSection.scss"

let promoveringSection = function() {

    let element = document.createElement('section')
    element.classList.add("section")

element.append(proSection())

return element
}
export default promoveringSection
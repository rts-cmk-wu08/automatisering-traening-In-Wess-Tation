import proSection from "./proSection.js"
import "./promoveringSection.scss"

let promoveringSection = function() {

    let element = document.createElement('section')
    element.classList.add("section")

    element.innerHTML = `
        <h1 class="section__h1">Making your facility known is our priority</h1>
    `
element.append(proSection())

return element
}
export default promoveringSection
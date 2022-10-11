import facSection from "./facSection.js"
import "./facilitySection.scss"

let facilitySection = function() {

    let element = document.createElement('section')
    element.classList.add("section")

    element.innerHTML = `
        <h1 class="section__h1">Making your facility known is our priority</h1>
    `
element.append(facSection())

return element
}
export default facilitySection
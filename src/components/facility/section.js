import facSection from "./facSection.js"
import "./section.scss"

let section = function() {

    let element = document.createElement('section')
    element.classList.add("section")

    element.innerHTML = `
        <h1 class="section__h1">Our Advantages</h1>
    `
element.append(facSection())

return element
}
export default section
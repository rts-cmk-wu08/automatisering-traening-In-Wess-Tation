import hdSection from "./hdSection.js"
import "./headerSection.scss"

let headerSection = function() {

    let element = document.createElement('section')
    element.classList.add("section")

element.append(hdSection())

return element
}
export default headerSection
import siteSection from "./siteSection.js"
import "./sites.scss"

let site = function() {

    let element = document.createElement('section')
    element.classList.add("section")

element.append(siteSection())

return element
}
export default site
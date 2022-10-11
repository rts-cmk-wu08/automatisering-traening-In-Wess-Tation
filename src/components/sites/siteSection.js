import { site } from "../../data.js"
import siteArticle from "./siteArticle.js"
import "./siteSection.scss"

console.log(services)
let siteSection = function() {

let element = document.createElement('div')
element.classList.add('services')

services.forEach(service => {

    element.append(siteArticle(service))

})


return element
}

export default siteSection
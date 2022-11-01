import { services } from "../../data.js"
import proArticle from "./proArticle.js"
import "./proSection.scss"

console.log(services)
let proSection = function() {

let element = document.createElement('div')
element.classList.add('services')

services.forEach(service => {

    element.append(proArticle(service))

})


return element
}

export default proSection
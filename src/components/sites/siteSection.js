import { sites } from "../../data.js"
import siteArticle from "./siteArticle.js"
import "./siteSection.scss"

console.log(sites)
let siteSection = function() {

let element = document.createElement('div')
element.classList.add('sites')

    fetch("http://localhost:4000/sites")
    .then(response => response.json())
    .then(sites => {


    element.append(siteArticle(sites))

    })

return element
}

export default siteSection
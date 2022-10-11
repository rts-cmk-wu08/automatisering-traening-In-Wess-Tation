import { sites } from "../../data.js"
import siteArticle from "./siteArticle.js"
import "./siteSection.scss"

console.log(sites)
let siteSection = function() {

let element = document.createElement('div')
element.classList.add('sites')

// sites.places.forEach(site => {
// element.innerHTML = `
//     <h1 class="section__h1">${site.headline}</h1>
// `
    element.append(siteArticle(sites))

// })


return element
}

export default siteSection
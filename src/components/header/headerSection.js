import { hero } from "../../data.js"
import hdArticle from "./hdArticle.js"
import "./hdSection.scss"

console.log(hero)
let hdSection = function() {

let element = document.createElement('div')
element.classList.add('services')

hero.forEach(header => {

    element.append(Article(header))

})


return element
}

export default hdSection
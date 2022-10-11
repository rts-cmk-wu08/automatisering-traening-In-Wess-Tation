import { facilities } from "../../data.js"
import facArticle from "./facArticle.js"
import "./facSection.scss"

console.log(facilities)
let facSection = function() {

let element = document.createElement('div')
element.classList.add('facilities')

facilities.forEach(facility => {

    element.append(advArticle(facility))

})


return element
}

export default facSection
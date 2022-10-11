import { hero } from "../../data.js"
import headerbox from "./headerbox.js"
import "./header.scss"

console.log(hero)
let hdSection = function() {

let element = document.createElement('header')
element.classList.add('header')

    element.innerHTML = `
    <img class="header__img" src="${hero.image}" alt="">

    `
element.append(headerbox(hero))

return element
}

export default hdSection
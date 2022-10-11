import "./headerbox.scss"

let headerbox = function(hero) {
    let element = document.createElement("div")
    element.classList.add("box")

    element.innerHTML = `
    <h1 class="box__h1">${hero.headline}</h1>
    <p class="box__p">${hero.copy}</p>
    <button class="box__btn"><a class="box__a" href="${hero.icon}"><i class="fa-solid fa-globe"></i> Explore</a></button>

    `
    return element

}
export default headerbox
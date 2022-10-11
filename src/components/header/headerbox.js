let headerbox = function(hero) {
    let element = document.createElement("div")
    element.classList.add("header")

    element.innerHTML = `
    <h1>${hero.headline}</h1>

    `
    return element

}
export default headerbox
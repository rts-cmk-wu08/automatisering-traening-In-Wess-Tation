import "./sitePlaces.scss"

let siteArticle = function (sites) {

    let element = document.createElement('article')
    element.classList.add("grid")

    element.innerHTML = `
    <div class="places-grid">
        <img class="grid__img" src="${sites.img}" alt="">
        <h2 class="grid__h2">${sites.name}</h2>
        <p class="grid__p">${sites.city}</p>
        <p class="grid__view">View the site</p>
    </div>

`
return element
}
export default siteArticle








import "./siteArticle.scss"

let siteArticle = function (sites) {

    let element = document.createElement('article')
    element.classList.add("site-article")

    element.innerHTML = `
    <div class="places-grid">
        <img class="places-grid__img" src="${sites.img}" alt="">
        <h2 class="places-grid__h2">${sites.name}</h2>
        <p class="places-grid__p">${sites.city}</p>
    </div>

`
return element
}
export default siteArticle








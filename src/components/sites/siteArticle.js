import "./siteArticle.scss"

let siteArticle = function (services) {

    let element = document.createElement('article')
    element.classList.add("site-article")

    element.innerHTML = `
    <h1 class="site-article__headline">${site.headline}</h1>
    <p class="site-article__text">${site.text}</p>
    <img class="site-article__img" src="${site.btnicon}" alt="">
    <p class="site-article__link">${site.linktext}</p>

`
return element
}
export default siteArticle
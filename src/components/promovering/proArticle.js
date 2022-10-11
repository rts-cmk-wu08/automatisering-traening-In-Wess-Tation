import "./proArticle.scss"

let proArticle = function (services) {

    let element = document.createElement('article')
    element.classList.add("pro-article")

    element.innerHTML = `
    <img class="pro-article__img" src="${services.illustration}" alt="">
    <h1 class="pro-article__headline">${services.headline}</h1>
    <p class="pro-article__text">${services.text}</p>
    <p class="pro-article__link">Show me more</p>

`
return element
}
export default proArticle
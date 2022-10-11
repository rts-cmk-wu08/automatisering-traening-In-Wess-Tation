import "./facArticle.scss"

let facArticle = function (facility) {

    let element = document.createElement('article')
    element.classList.add("fac-article")

    element.innerHTML = `
    <img class="fac-article__img" src="${facility.icon}" alt="">
    <h1 class="fac-article__headline">${facility.headline}</h1>
    <p class="fac-article__text">${facility.text}</p>

`
return element
}
export default facArticle
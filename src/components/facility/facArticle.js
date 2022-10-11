import "./facArticle.scss"

let facArticle = function (facilities) {

    let element = document.createElement('article')
    element.classList.add("fac-article")

    element.innerHTML = `
    <img class="fac-article__img" src="${facilities.icon}" alt="">
    <h1 class="fac-article__headline">${facilities.headline}</h1>
    <p class="fac-article__text">${facilities.text}</p>

`
return element
}
export default facArticle
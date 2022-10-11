import "./hdArticle.scss"

let hdArticle = function (services) {

    let element = document.createElement('article')
    element.classList.add("hd-article")

    element.innerHTML = `
    <img class="hd-article__img" src="${hero.image}" alt="">


`
return element
}
export default hdArticle
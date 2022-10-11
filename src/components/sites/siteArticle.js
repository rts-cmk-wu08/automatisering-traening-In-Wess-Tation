import "./siteArticle.scss"

let siteArticle = function (sites) {

    let element = document.createElement('article')
    element.classList.add("site-article")

    element.innerHTML = `
    <div class="site-box">
        <h1 class="site-article__headline">${sites.headline}</h1>
        <p class="site-article__text">${sites.text}</p>
        <button class="site-box__btn"><a href="${sites.btnicon}"><i class="fa-solid fa-play"></i> Start</a></button>
    </div>

`
    sites.places.forEach(place => {
        console.log(place)
        element.append(sitePlaces(sites))

    })

return element
}
export default siteArticle
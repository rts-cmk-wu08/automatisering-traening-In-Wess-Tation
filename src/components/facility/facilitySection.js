import "./facilitySection.scss"

let facilitySection = function() {

    let element = document.createElement('section')
    element.classList.add("section")

    fetch("http://localhost:4000/facilities")
    .then(response => response.json())
    .then(facilities => {
    

    element.innerHTML = `
        <h1 class="section__h1">Making your facility known is our priority</h1>
    `
element.append(facSection())

    })

return element
}
export default facilitySection
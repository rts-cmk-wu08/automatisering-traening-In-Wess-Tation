import section from "./components/advantages/section.js"
import facilitySection from "./components/facility/facilitySection.js"
import promoveringSection from "./components/promovering/promoveringSection.js"
import header from "./components/header/header.js"
import sites from "./components/sites/sites.js"
import "./index.scss"

let element = document.querySelector(".wrapper")
    
element.append(header())
element.append(promoveringSection())
element.append(facilitySection())
element.append(sites())
element.append(section())

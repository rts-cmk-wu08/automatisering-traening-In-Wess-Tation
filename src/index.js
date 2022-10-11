import section from "./components/advantages/section.js"
import facilitySection from "./components/facility/facilitySection.js"
import promoveringSection from "./components/promovering/promoveringSection.js"
import headerSection from "./components/header/headerSection.js"

let element = document.querySelector(".wrapper")
    
element.append(headerSection())
element.append(promoveringSection())
element.append(facilitySection())
element.append(section())

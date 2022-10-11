import section from "./components/advantages/section.js"
import facilitySection from "./components/facility/facilitySection.js"
import promoveringSection from "./components/promovering/promoveringSection.js"

let element = document.querySelector(".wrapper")
    
element.append(promoveringSection())
element.append(facilitySection())
element.append(section())

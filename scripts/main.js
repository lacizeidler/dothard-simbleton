// import { getBusinesses } from "./database.js"
import { moreBusinesses } from "./BusinessList.js"
import { moreNewYorkBusinesses } from "./filteredBusinesses.js"
import { moreManufacturingBusinesses } from "./filteredManuBusinesses.js"

const mainContainer = document.querySelector(".main-container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="businessList--all">
        <h2>Employees</h2>
        ${moreBusinesses()}
    </section>
    <section class="businessList--newYork">
        <h2>Employees</h2>
        ${moreNewYorkBusinesses()}
    </section>
    <section class="businessList--maufacturing">
        <h2>Employees</h2>
        ${moreManufacturingBusinesses()}
    </section>
`

mainContainer.innerHTML = applicationHTML

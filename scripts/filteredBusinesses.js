import { nyBusinesses } from "./database.js"
import { newYorkBusiness } from "./businessesinNY.js"

const contentTarget = document.querySelector(".businessList--newYork")

const newYorkBusinessList = () => {
    const businessArray = nyBusinesses()
    contentTarget.innerHTML = "<h1>Active New York Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += newYorkBusiness(businessObject)
        }
    )
}

const businesses = newYorkBusinessList()

export const moreNewYorkBusinesses = () => {
    let html = "<ul>"

    for (const business of businesses) {
        html += `<li id="business--${business.companyName}">${business.companyName}</li>`
    }

    html += "</ul>"

    return html
}
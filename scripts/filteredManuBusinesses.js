import { manufacturingBusinesses } from "./database.js"
import { manfacturingBusiness } from "./manufacturingBusiness.js"

const contentTarget = document.querySelector(".businessList--manufacturing")

const manufacturingBusinessList = () => {
    const businessArray = manufacturingBusinesses()
    contentTarget.innerHTML = "<h1>Active Manufacturing Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += manfacturingBusiness(businessObject)
        }
    )
}

const businesses = manufacturingBusinessList()

export const moreManufacturingBusinesses = () => {
    let html = "<ul>"

    for (const business of businesses) {
        html += `<li id="business--${business.companyName}">${business.companyName}</li>`
    }

    html += "</ul>"

    return html
}
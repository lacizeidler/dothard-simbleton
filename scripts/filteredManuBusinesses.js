import { manufacturingBusinesses } from "./database.js"
import { manfacturingBusiness } from "./manufacturingBusiness.js"

const contentTarget = document.querySelector(".businessList--manufacturing")

export const manufacturingBusinessList = () => {
    const businessArray = manufacturingBusinesses()
    contentTarget.innerHTML = "<h1>Active Manufacturing Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += manfacturingBusiness(businessObject)
        }
    )
}

manufacturingBusinessList()

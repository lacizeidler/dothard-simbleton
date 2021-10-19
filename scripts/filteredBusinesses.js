import { nyBusinesses } from "./database.js"
import { newYorkBusiness } from "./businessesinNY.js"

const contentTarget = document.querySelector(".businessList--newYork")

export const newYorkBusinessList = () => {
    const businessArray = nyBusinesses()
    contentTarget.innerHTML = "<h1>Active New York Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += newYorkBusiness(businessObject)
        }
    )
}

newYorkBusinessList()
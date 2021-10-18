import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"
import { findCompanyName } from "./database.js";

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = ???.find(???)/** implement .find() method here */

                    companySearchResultArticle.innerHTML = Business(???);
                }
        });



const contentTarget = document.querySelector(".businessList--all")

const businessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

const businesses = businessList()

export const moreBusinesses = () => {
    let html = "<ul>"

    for (const business of businesses) {
        html += `<li id="business--${business.companyName}">${business.companyName}</li>`
    }

    html += "</ul>"

    return html
}



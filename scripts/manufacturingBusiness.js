export const manfacturingBusiness = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObject.companyName}</h2>
             <div class="business__addressFullStreet">
                 ${businessObject.addressFullStreet}
                <br> 
                ${businessObject.addressCity}
                ${businessObject.addressStateCode}
                ${businessObject.addressZipCode}
            </div>
        </section>
    `
}
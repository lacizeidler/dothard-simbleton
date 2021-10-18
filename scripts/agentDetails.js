import { getAgents } from "./database";
import { getBusinesses } from "./database";

const businessList = getBusinesses()

const agentDetails = () => {
    const mappedBusinessList = businessList.map(business => {
        const newObject = {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`, 
            companyName: business.companyName,
            phoneWork: business.phoneWork
        }
        return newObject
    })
    return mappedBusinessList
}
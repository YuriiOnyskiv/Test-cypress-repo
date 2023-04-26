
export class TablesSmartTablePage{

    addNewRow(firstName, lastName){
        cy.get("thead").find(".nb-plus").click()
        cy.get("input-editor").find("[placeholder='First Name']").type(firstName)
        cy.get("input-editor").find("[placeholder='Last Name']").type(lastName)
        cy.get("i.nb-checkmark").click()
    }

    updateAddedRow(firstName, lastName){
        cy.get("tbody").find("tr").first().then( rowToUpdate =>{
            cy.wrap(rowToUpdate).find("td").eq(0).then( groupOfBtn =>{
                cy.wrap(groupOfBtn).find("i.nb-edit").click()
            })
        })
        cy.get("input-editor").find("[ng-reflect-name='firstName']").clear().type(firstName)
        cy.get("input-editor").find("[ng-reflect-name='lastName']").clear().type(lastName)
        cy.get("i.nb-checkmark").click()
    }

    deleteAddedRow(){
        cy.get("tbody").find("tr").first().then( rowToUpdate =>{
            cy.wrap(rowToUpdate).find("td").eq(0).then( groupOfBtn =>{
                cy.wrap(groupOfBtn).find("i.nb-trash").click()
            })
        })

    }
}

export const onTablesSmartTablePage = new TablesSmartTablePage()
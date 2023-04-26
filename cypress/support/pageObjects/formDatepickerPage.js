
function selectDateFromCurrent(day){ // function must be outside of the class to be visible
    let date = new Date()

    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMounth = date.toLocaleString('en-US',{month: "short"})
    let assertDate = futureMounth + " " + futureDay + ", " +date.getFullYear()
    cy.log(futureMounth)
    cy.log(futureDay)
    cy.get("nb-calendar-navigation").invoke("attr", "ng-reflect-date").then( attributeMounth =>{
        if(!attributeMounth.includes(futureMounth)){

            cy.get("[data-name='chevron-right']").click()
            selectDateFromCurrent(day)
        }else{
            cy.get(".day-cell").not(".bounding-month").contains(futureDay).click()
        
        }
        
    }) 
    return assertDate
}

export class FormsDatepickerPage{
    
    setDateOnCommonDatepicker(day){

        cy.contains("nb-card", "Common Datepicker").find("input").then( inputField => {
            cy.wrap(inputField).click()
            let assertDate = selectDateFromCurrent(day)
            cy.wrap(inputField).invoke("prop", "value").should("contain", assertDate)
        })

    }

    setDateOnRangeDatepicker(firstDay, secondDay){
        cy.contains("nb-card", "Datepicker With Range").find("input").then( inputField => {
            cy.wrap(inputField).click()
            let firstAssertDate = selectDateFromCurrent(firstDay)
            let secondAssertDate = selectDateFromCurrent(secondDay)
            const finalAssertDate = firstAssertDate+" - "+ secondAssertDate
            cy.wrap(inputField).invoke("prop", "value").should("contain", finalAssertDate)
        })
    }

    setDateOnDisabledDatepicker(day){
        cy.contains("nb-card", "Datepicker With Disabled Min Max Values").find("input").then( inputField => {
            cy.wrap(inputField).click()
            let assertDate = selectDateFromCurrent(day)
            cy.wrap(inputField).invoke("prop", "value").should("contain", assertDate)
        })

    }
}
export const onFormsDatepickerPage = new FormsDatepickerPage()
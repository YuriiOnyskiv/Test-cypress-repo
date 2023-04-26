/// <reference types="cypress" />

describe("My first suite", () =>{
    it("First test", () => {
        cy.visit("/");

        cy.contains("Forms").click();

        cy.contains("Form Layouts").click();

        cy.contains("Horizontal form")
        .parents("[class=col-md-6]")
        .find("[status=warning]")
        .should("contain", "Sign in")
        .click()
       
        cy.contains("Horizontal form")
        .parents("[class=col-md-6]")
        .find("span, ._ngcontent-yrd-c20")
        .should("contain", "Remember me")
        .first()
        .click();

        
})
    it("Second test" , () =>{
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layout").click();

        cy.contains("nb-card", "Using the Grid").then(GridForm =>{
            const signBtnGrid = GridForm.find("button,[type='submit']").text()
            cy.wrap(signBtnGrid).should("contain", "Sign in")

            cy.contains("nb-card", "Horizontal form").then(HorizontalForm =>{
                const signBtnHorizontal = HorizontalForm.find("button,[type='warning']").text()
                cy.wrap(signBtnHorizontal).should("contain", "Sign in")

                expect(signBtnGrid).to.equal(signBtnHorizontal)
            
        }) 
      
    })
})
    it("3 test", () =>{
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Datepicker").click();

        cy.contains("nb-card", "Common Datepicker").find("input").then( inputField => {
            /*cy.wrap(inputField).find("input, [placeholder='Form Picker']").click()*/ // my variant, not work :c
            cy.wrap(inputField).click()
            cy.get("[ng-reflect-ng-switch='date']").contains("4").click()
            cy.wrap(inputField).invoke("prop", "value").should("contain", "Apr 4, 2023")
            
            
        })
    })
    
    it("4 test", () =>{
        function selectDateFromCurrent(day){
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
                    cy.get("nb-calendar-picker, [class='day-cell ng-star-inserted']").contains(futureDay).click()
                
                }
                
            }) 
            return assertDate
        }
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Datepicker").click();

        cy.contains("nb-card", "Common Datepicker").find("input").then( inputField => {
            cy.wrap(inputField).click()
            let assertDate = selectDateFromCurrent(50)
            cy.wrap(inputField).invoke("prop", "value").should("contain", assertDate)
    
    })
})

    it("Dropdown list", () => {

        cy.visit("/");

        cy.get(".nb-layout-header, .nb-select, [class='select-button']").then( dropdownlist =>{

            cy.wrap(dropdownlist).click();
            cy.get("[class='options-list'] nb-option").each( (listItem, index)=>{    
                cy.wrap(listItem).click()
                const itemText = listItem.text().trim()
                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }
                
                cy.wrap(dropdownlist).should("contain", itemText)
                cy.get("nb-layout-header nav").should("have.css", "background-color", colors[itemText])
                if(index < 3 ){
                    cy.wrap(dropdownlist).click()
                }
            })
        })
        
    })

    it.only("Table", () => {
        
        cy.visit("/");
        cy.contains("Tables & Data").click();
        cy.contains("Smart Table").click();

        cy.get("thead").find(".nb-plus").click()
        cy.get("thead").find("tr").eq(2).then( rowOfTable => {
            
            let firstName = "Yurii"
            let lastName = "Onyskiv"
            
            cy.wrap(rowOfTable).find("td").eq(2).type(firstName)
            cy.wrap(rowOfTable).find("td").eq(3).type(lastName)

            cy.wrap(rowOfTable).find(".nb-checkmark").click()

        cy.get("tbody tr").first().find("td").then( tableColumn => {
            cy.wrap(tableColumn).eq(2).should("contain", firstName)
            cy.wrap(tableColumn).eq(3).should("contain", lastName)

            })
        })

        //2
        const age = [20, 30, 40, 200]

        cy.wrap(age).each( age =>{
            cy.get("thead [placeholder='Age']").clear().type(age)
                cy.wait(500)
                cy.get("tbody tr").each( ageRow => {
                    if(age == 200){
                        cy.wrap(ageRow).should("contain", "No data found")
                    }else{
                        cy.wrap(ageRow).should("contain", age)
                    }   

            })

        })
        
    })
})
import { wrap } from "module"

export class FormLayoutsPage{

    submitInlineForm(name, email){
        cy.contains("nb-card", "Inline form").find("form").then( inlineForm =>{
          cy.wrap(inlineForm).find("[placeholder='Jane Doe']").type(name)
          cy.wrap(inlineForm).find("[placeholder='Email']").type(email)
          cy.wrap(inlineForm).submit()// submit() can be used only for "form" attribute 
          //In other cases u need to use click() on the btn  
        })
       
    }
    
    submitBasicForm(email, password){
        cy.contains("nb-card", "Basic form").find("form").then( basicForm =>{
            cy.wrap(basicForm).find("[placeholder='Email']").type(email)
            cy.wrap(basicForm).find("[placeholder='Password']").type(password)
            cy.wrap(basicForm).submit()
        
        })
        
       } 
}
export const onFormLayoutsPage = new FormLayoutsPage()

function navigateToMenuItem(groupName){
    cy.contains("a", groupName).then( menuItem =>{
        cy.wrap(menuItem).find(".expand-state g g").invoke("attr", "data-name").then(attr =>{
            if(attr.includes("left") ){
                cy.wrap(menuItem).click()
            }
        })
    })

}

export class NavigationPage{

    layoutStepperPage(){
        navigateToMenuItem("Layout")
        cy.contains("Stepper").click();
    }
    
    layoutAccordionPage(){
        navigateToMenuItem("Layout")
        cy.contains("Accordion").click();
    }

    formLayoutsPage(){
        navigateToMenuItem("Forms")
        cy.contains("Form Layouts").click();
    }

    formDatepickerPage(){
        navigateToMenuItem("Forms")
        cy.contains("Datepicker").click();
    }

    modalDialogPage(){
        navigateToMenuItem("Modal & Overlays")
        cy.contains("Dialog").click();
    }

    modalWindowPage(){
        navigateToMenuItem("Modal & Overlays")
        cy.contains("Window").click();
    }

    modalPopoverPage(){
        navigateToMenuItem("Modal & Overlays")
        cy.contains("Popover").click();
    }

    modalToastPage(){
        navigateToMenuItem("Modal & Overlays")
        cy.contains("Toast").click();
    }

    modalTooltipPage(){
        navigateToMenuItem("Modal & Overlays")
        cy.contains("Tooltip").click();
    }

    extraCalendarPage(){
        navigateToMenuItem("Extra Components")
        cy.contains("Calendar").click();
    }

    tablesSmartTablePage(){
        navigateToMenuItem("Tables & Data")
        cy.contains("Smart Table").click();
    }

    tablesTreeGridPage(){
        navigateToMenuItem("Tables & Data")
        cy.contains("Tree Grid").click();
    }

    authLoginPage(){
        navigateToMenuItem("Auth")
        cy.contains("Login").click();
    }

    authRegisterPage(){
        navigateToMenuItem("Auth")
        cy.contains("Register").click();
    }

    authRequestPasswordPage(){
        navigateToMenuItem("Auth")
        cy.contains("Request Password").click();
    }

    authRessetPasswordPage(){
        navigateToMenuItem("Auth")
        cy.contains("Reset Password").click();
    }
}

export const navigateTo = new NavigationPage()
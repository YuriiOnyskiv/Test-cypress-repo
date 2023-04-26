import { onFormsDatepickerPage } from "../support/pageObjects/formDatepickerPage"
import { onFormLayoutsPage } from "../support/pageObjects/formLayoutsPage"
import {navigateTo} from "../support/pageObjects/navigationPage"
import { onTablesSmartTablePage } from "../support/pageObjects/tablesSmartTablePage"
describe("Test with Page Object", () =>{

    beforeEach("open aplication", () =>{
        cy.visit("/")
    })


    it("Verification of navigation to pages", () => {

        
        navigateTo.authLoginPage()
        cy.get("[icon='arrow-back']").click()
        navigateTo.authRegisterPage()
        cy.get("[icon='arrow-back']").click()
        navigateTo.authRequestPasswordPage()
        cy.get("[icon='arrow-back']").click()
        navigateTo.authRessetPasswordPage()
        cy.get("[icon='arrow-back']").click()
        navigateTo.extraCalendarPage()
        navigateTo.formDatepickerPage()
        navigateTo.formLayoutsPage()
        navigateTo.layoutAccordionPage
        navigateTo.layoutStepperPage()
        navigateTo.modalDialogPage()
        navigateTo.modalPopoverPage()
        navigateTo.modalToastPage()
        navigateTo.modalTooltipPage()
        navigateTo.modalWindowPage()
        navigateTo.tablesSmartTablePage()
        navigateTo.tablesTreeGridPage()
        
    })

    it("Shoud submit Inline and Basic form, and select tomorrow day in the common datepicker calendar", () =>{

        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineForm("Yurii", "test@gmail.com")
        onFormLayoutsPage.submitBasicForm("onyskiv@test.com", "pass123")
        navigateTo.formDatepickerPage()
        onFormsDatepickerPage.setDateOnCommonDatepicker(1)
    })

    it("Should select date range in the Datepicker with range calendar", ()=>{

        navigateTo.formDatepickerPage()
        onFormsDatepickerPage.setDateOnRangeDatepicker(1, 5)
    })

    it("Should select date in the Datepicker With Disabled Min Max Values", ()=>{
        navigateTo.formDatepickerPage()
        onFormsDatepickerPage.setDateOnDisabledDatepicker(2)
    })

    it.only("Should add new row to the Smart Table, update it and then remove it", () => {
        navigateTo.tablesSmartTablePage()
        onTablesSmartTablePage.addNewRow("Yurii", "Onyskiv")
        onTablesSmartTablePage.updateAddedRow("New Yurii3", "New ony")
        onTablesSmartTablePage.deleteAddedRow()
    })
})
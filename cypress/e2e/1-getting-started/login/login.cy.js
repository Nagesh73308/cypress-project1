// syntax 
// describe("",()=>{
//     it("",()=>{
    
//     })
// })

//=========================================

describe("test suit(login functionality)",()=>{
    it.only("test cases(verify the login with valied details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-input oxd-input--active"]').first().type('Admin')
        cy.get('[class="oxd-input oxd-input--active"]').last().type('admin123')
        cy.get('.oxd-button').click()
        cy.get('[class="oxd-main-menu-item active"]').should('be.visible')   //dashboard should visible
        cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(1).should('have.text',"PIM").click()    //check pim module and click pim module
        cy.contains('Add Employee').should('have.text',"Add Employee").click()    //checking and click add employee
        cy.get('[class="oxd-input oxd-input--active orangehrm-firstname"]').type('ravi')    //write first name
        cy.get('[class="oxd-input oxd-input--active orangehrm-lastname"]').type('raju')      //write last name
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()    //click save button
        cy.get('[class="oxd-topbar-body-nav-tab-item"]').eq(1).should('have.text',"Employee List") //click emp list 
        cy.get('[class="oxd-topbar-body-nav-tab"]').eq(0).click()   //search through emp id 
        cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('0066')     //enter emp id
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()  //click on search button
        cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).should('have.text',"David ")   //checking the first name
        cy.get('[class="oxd-icon bi-check oxd-checkbox-input-icon"]').eq(1).click()   //clicking the  check box button
        cy.get('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-horizontal-margin"]').click()    //checking the delete option
        cy.contains(' Yes, Delete ').click()     //click on delete option
        cy.contains('Successfully Deleted').should('be.visible')   //checking the delete message visdible or not

        
    
        




        
        //cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    
    })
    it("test cases(verify the login with invalid user name and valid password  details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-input oxd-input--active"]').first().type('admin')
        cy.get('[class="oxd-input oxd-input--active"]').last().type('admin1dvsff23')
        cy.get('.oxd-button').click()
        //cy.get('[class="oxd-main-menu-item active"]').should('be.visible')
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('be.visible')
    
    })
    it("test cases(verify the login with valid user name and invalid password details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-input oxd-input--active"]').first().type('Admin')
        cy.get('[class="oxd-input oxd-input--active"]').last().type('Admin123dvgfg')
        cy.get('.oxd-button').click()
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('be.visible')
        //cy.get('oxd-text oxd-text--p oxd-alert-content-text').should('be.visible')
    
    })
    it("test cases(verify the login with out entering details details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-input oxd-input--active"]').first().type(' ')
        cy.get('[class="oxd-input oxd-input--active"]').last().type(' ')
        cy.get('.oxd-button').click()
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible')
        
    
    })
    it("test cases(verify the login with invalid user name and invalid password  details)",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-input oxd-input--active"]').first().type('Admin166666')
        cy.get('[class="oxd-input oxd-input--active"]').last().type('admin1234')
        cy.get('.oxd-button').click()
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('be.visible')
        
    
    })
})
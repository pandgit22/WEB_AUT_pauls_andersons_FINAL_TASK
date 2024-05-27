describe('Final task', () => {
    context("Tasks", () => {
        // Define variables
        const firstName = "Pauls";
        const lastName = "Andersons";
        const email = "test@email.com";
        const gender = "Male";
        const mobile = "2345325423";
        const address = "Valmiera";
        const dateOfBirth = {
            year: "1930",
            month: "February",
            day: "28"
        };
        const subject = "Economics";
        const hobby = "Music";
        const pictureFileName = "bin.png";
        const pictureFilePath = 'cypress/e2e/files/'+pictureFileName;
        const state = "NCR";
        const city = "Delhi";
        const fullName = firstName+" "+lastName;
        const fullDateOfBirth = dateOfBirth.day+" "+dateOfBirth.month+","+dateOfBirth.year;
        const stateAndCity = state+" "+city;

        it('Final task', () => {
            // Connect to site
            cy.visit('https://demoqa.com/automation-practice-form') // No reason to use page objects as this task only works on 1 page?
            
            // Enter textbox values
            cy.get('#firstName').type(firstName);
            cy.get('#lastName').type(lastName);
            cy.get('#userEmail').type(email);
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
            cy.get('#userNumber').type(mobile);
            cy.get('#currentAddress').type(address);

            // Calendar values
            cy.get('#dateOfBirthInput').click();
            cy.get('.react-datepicker__year-select').select(dateOfBirth.year);
            cy.get('.react-datepicker__month-select').select(dateOfBirth.month);
            cy.get('.react-datepicker__day--0'+dateOfBirth.day).not(".react-datepicker__day--outside-month").click();

            // Subject to economics
            cy.get('#subjectsInput').type(subject).type("{enter}");

            // Hobbies to music
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').should("contain.text",hobby).click();

            // Upload picture
            cy.get('#uploadPicture').selectFile(pictureFilePath);

            // State and city
            cy.get('#state').click();
            cy.get('#react-select-3-option-0').should("contain.text",state).click();
            cy.get('#city').click();
            cy.get('#react-select-4-option-0').should("contain.text",city).click();

            // Click Submit
            cy.get('#submit').click();
                
            // Validate values
            cy.get('.table-responsive').within(() => {
                cy.contains('Student Name').next().should('contain.text', fullName);
                cy.contains('Student Email').next().should('contain.text', email);
                cy.contains('Gender').next().should('contain.text', gender);
                cy.contains('Mobile').next().should('contain.text', mobile);
                cy.contains('Date of Birth').next().should('contain.text', fullDateOfBirth);
                cy.contains('Subjects').next().should('contain.text', subject);
                cy.contains('Hobbies').next().should('contain.text', hobby);
                cy.contains('Picture').next().should('contain.text', pictureFileName);
                cy.contains('Address').next().should('contain.text', address);
                cy.contains('State and City').next().should('contain.text', stateAndCity);
            });
                
    
        });
    });
});

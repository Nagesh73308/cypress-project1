import ExamplePage from "../pages/example.po";
describe("User Data Test", () => {
  before(() => {
    // Load fixture data
    cy.fixture("example1.json").as("userData");
  });
  it("should access user data from fixture", function () {
    // Visit the base URL
    cy.visit(Cypress.env("baseUrl"));
    // Expand the JSON input area
    ExamplePage.clickOnTableData().click({ force: true });
    // Clear the existing JSON data and type new data
    ExamplePage.clickOnInputBox()
      .clear()
      .type(JSON.stringify(this.userData.typedData), {
        parseSpecialCharSequences: false,
      });
    // Refresh the table to see the new data
    ExamplePage.clickOnRefreshTableButton().click();
    for (let i = 3; i <= 7; i++) {
      cy.get(
        `table[id="dynamictable"] > tr:nth-child(${i}) > td:nth-child(1)`
      ).then((cell) => {
        const cellText = cell.text().trim(); // trim() to remove any surrounding whitespace
        expect(cellText).to.equal(this.userData.typedData[i - 3].name); // Accessing userData.typedData with index i - 3
      });
      cy.get(
        `table[id="dynamictable"] > tr:nth-child(${i}) > td:nth-child(2)`
      ).then((cell) => {
        const cellText = cell.text().trim();
        expect(cellText).to.equal(
          this.userData.typedData[i - 3].age.toString()
        ); // Accessing userData.typedData with index i - 3
      });
      cy.get(
        `table[id="dynamictable"] > tr:nth-child(${i}) > td:nth-child(3)`
      ).then((cell) => {
        const cellText = cell.text().trim();
        expect(cellText).to.equal(this.userData.typedData[i - 3].gender); // Accessing userData.typedData with index i - 3
      });
    }
    cy.wait(4000)
  });
});

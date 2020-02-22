import { Given } from "cypress-cucumber-preprocessor/steps";

import * as GoogleSearch from "../../integration/PageObjects/GoogleSearch.js"

const url = "https://google.com";

Given(`I open Google page`, () => {
 
  cy.visit(GoogleSearch.casa());
});

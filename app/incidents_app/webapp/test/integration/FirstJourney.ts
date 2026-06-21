import opaTest from "sap/ui/test/opaQunit";
import type { Given, When, Then } from "./types/OpaJourneyTypes";
import runner from "./pages/JourneyRunner";

function journey() {
    QUnit.module("First journey");

    opaTest("Start application", function (Given: Given, _When: When, Then: Then) {
        Given.iStartMyApp();
        Then.onTheIncidentsList.iSeeThisPage();
    });


    opaTest("Navigate to ObjectPage", function (_Given: Given, When: When, Then: Then) {
        // Note: this test will fail if the ListReport page doesn't show any data
        
        When.onTheIncidentsList.onFilterBar().iExecuteSearch();
        
        Then.onTheIncidentsList.onTable("").iCheckRows();

        When.onTheIncidentsList.onTable("").iPressRow(0);
        Then.onTheIncidentsObjectPage.iSeeThisPage();

    });

    opaTest("Teardown", function (Given: Given) {
        // Cleanup
        Given.iTearDownMyApp();
    });
}

runner.run([journey]);

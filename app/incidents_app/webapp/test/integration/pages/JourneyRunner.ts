import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomIncidentsList from "./IncidentsList";
import CustomIncidentsObjectPage from "./IncidentsObjectPage";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("namespace1/incidentsapp") + "/test/flp.html#app-preview",
    pages: {
        onTheIncidentsList: new ListReport(
            {
                appId: "namespace1.incidentsapp",
                componentId: "IncidentsList",
                entitySet: "",
                contextPath: "/Incidents"
            },
            CustomIncidentsList
        ),
        onTheIncidentsObjectPage: new ObjectPage(
            {
                appId: "namespace1.incidentsapp",
                componentId: "IncidentsObjectPage",
                entitySet: "",
                contextPath: "/Incidents"
            },
            CustomIncidentsObjectPage
        )
    },
    async: true
});

export default runner;

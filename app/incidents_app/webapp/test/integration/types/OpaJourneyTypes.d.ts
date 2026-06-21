import type Opa5 from "sap/ui/test/Opa5";
import type { actions as ListReportActions, assertions as ListReportAssertions } from "sap/fe/test/ListReport";
import type { actions as ObjectPageActions, assertions as ObjectPageAssertions } from "sap/fe/test/ObjectPage";
import type { actions as TemplatePageActions, assertions as TemplatePageAssertions } from "sap/fe/test/TemplatePage";
import type Shell from "sap/fe/test/Shell";
import type BaseArrangements from "sap/fe/test/BaseArrangements";
import type { actions as IncidentsListCustomActions, assertions as IncidentsListCustomAssertions } from "../pages/IncidentsList";
import type { actions as IncidentsObjectPageCustomActions, assertions as IncidentsObjectPageCustomAssertions } from "../pages/IncidentsObjectPage";

export type Given = Opa5 & BaseArrangements & {
    iTearDownMyApp: () => Given;
    iStartMyApp: (sAppHash?: string, mInUrlParameters?: object) => Given;
    and: Given;
};

export type When = Opa5 & BaseArrangements & {
    onTheIncidentsList: Opa5 & ListReportActions & TemplatePageActions & typeof IncidentsListCustomActions;
    onTheIncidentsObjectPage: Opa5 & ObjectPageActions & TemplatePageActions & typeof IncidentsObjectPageCustomActions;
    onTheShell: Shell;
};

export type Then = Opa5 & BaseArrangements & {
    onTheIncidentsList: Opa5 & ListReportAssertions & TemplatePageAssertions & typeof IncidentsListCustomAssertions;
    onTheIncidentsObjectPage: Opa5 & ObjectPageAssertions & TemplatePageAssertions & typeof IncidentsObjectPageCustomAssertions;
    onTheShell: Shell;
};

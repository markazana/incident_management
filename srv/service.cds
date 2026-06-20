using { incident_management as my } from '../db/schema.cds';

@path : '/service/ProcessorService'
service ProcessorService
{
    @cds.redirection.target
    @odata.draft.enabled
    entity Incidents as
        projection on my.Incidents;

    @cds.redirection.target
    @odata.draft.enabled
    entity Customers as
        projection on my.Customers
        {
            *,
            firstName || ' ' || lastName as name : String
        };

    @cds.redirection.target
    entity Conversations as
        projection on my.Conversations;

    @cds.redirection.target
    @odata.draft.enabled
    entity Status as
        projection on my.Status;
}

annotate ProcessorService with @requires :
[
    'authenticated-user'
];

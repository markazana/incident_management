namespace incident_management;

using
{
    managed,
    sap.common.CodeList
}
from '@sap/cds/common';

entity Conversations : managed
{
    key ID : UUID;
    author : String(100)
        @cds.on.insert : $user;
    message : String(100);
    timestamp : DateTime
        @cds.on.insert : $now;
    incident : Association to one Incidents;
}

entity Customers : managed
{
    key ID : UUID;
    email : String(100);
    firstName : String(100);
    lastName : String(100);
    phone : String(100)
        @Core.Computed;
    incidents : Association to many Incidents on incidents.customer = $self;
}

entity Incidents : managed
{
    key ID : UUID
        @Core.Computed;
    title : String(100)
        @title : '';
    customer : Association to one Customers;
    conversations : Composition of many Conversations on conversations.incident = $self;
    status : Association to one Status;
    urgency : Association to one Urgency;
}

entity Status : CodeList
{
    key code : StatusCode;
    criticality : Integer;
}

entity Urgency : CodeList
{
    key code : UrgencyCode;
}

type StatusCode : String enum
{
    new = 'N';
    assigned = 'A';
    in_process = 'I';
    on_hold = 'H';
    resolved = 'R';
    closed = 'C';
}

type UrgencyCode : String enum
{
    high = 'H';
    medium = 'M';
    low = 'L';
}

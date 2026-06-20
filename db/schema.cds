namespace incident_management;

aspect managed
{
    createdAt : DateTime;
    createdBy : LargeString;
    modifiedAt : DateTime;
    modifiedBy : LargeString;
}

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
    phone : String(100);
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
    status : Association to one Status on status.incident = $self;
    urgency : Association to one Urgency on urgency.incident = $self;
}

entity Status : CodeList
{
    key ID : UUID;
    key code : StatusCode;
    criticality : Integer;
    incident : Association to one Incidents;
}

aspect temporal
{
    validFrom : DateTime;
    validTo : DateTime;
}

aspect CodeList
{
    name : String(100);
    descr : String(100);
}

aspect extensible
{
    extensions__ : String(100);
}

entity Urgency : CodeList
{
    key code : UrgencyCode;
    incident : Association to one Incidents;
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

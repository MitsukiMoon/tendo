export interface Metadata {
    lastUpdated: string,
    resourceType: string,
    status: string

}
export interface Diagnosis {
    id: string,
    resourceType: string,
    metadata: Metadata,

}

export interface Appointment {
    id: string,
    patient: Models
}

export interface Name {
    givenName: string,
    familyName: string,
}

export interface Contact {

}

export interface Address {

}

export interface Models {
    id: string,
    active: boolean,
    name: Name,
    contacts: Set<Contact>,
    gender: string,
    birthdate: Date,
    address: Set<Address>,
    appointments: Array<Appointment>,

}
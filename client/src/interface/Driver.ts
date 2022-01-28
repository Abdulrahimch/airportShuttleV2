export interface Driver {
    id?: number;
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    carNumber: string;
    createdAt?: string;
    phoneNumber?: string;
};

export interface DriverApiData {
    error?: string,
    success?: { driver: Driver }
};

export interface GetDriversApiData {
    error?:  string,
    success?: { drivers: Driver []}
};
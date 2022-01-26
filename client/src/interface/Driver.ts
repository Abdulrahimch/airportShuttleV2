export interface Driver {
    id?: number;
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    carNumber: string;
};

export interface DriverApiData {
    error?: string,
    success?: Driver
};

export interface GetDriversApiData {
    error?: { error: string },
    success?: [Driver]
};
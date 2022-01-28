export interface GetReservationApiDataSuccess {
    reservations: [
        {
            id: number;
            from: number;
            to: number;
            property: string;
            pax: number;
            flightNo: string;
            driverNote: string;
            selectedDate: Date;
            timezone: number;
            date: string;
            time: string;
            cost?: number;
            client: {
                property: string;
            }
        }
    ]
};

export interface GetReservationApiData {
    error?:  string; 
    success?: GetReservationApiDataSuccess
};

export interface Reservation {
    _id: string;
    id: number;
    from: number;
    to: number;
    property: string;
    pax: number;
    flightNo: string;
    driverNote: string;
    selectedDate: Date;
    timezone: number;
    date: string;
    time: string;
    cost?: number;
    client: {
        property: string;
    }
} 
export interface FormLabels {
    type: string;
    from: string;
    to: string;
    pax: string;
    property: string;
    fullName: string;
    passenger: string;
    driverNote: string;
    flightNo: string;
    selectedDate: string;
}

export interface Page {
    title: string;
    form: FormLabels;
}

export interface FormValues {
    _id?: string;
    type: number;
    from: number;
    to: number;
    property: string;
    pax: number;
    flightNo: string;
    driverNote: string;
    selectedDate: Date;
    timezone: number;
    passengers: string[];
};

export interface ReservationApiDataSuccess {
    reservation: FormValues
};


export interface ReservationApiData {
    error?: { message: string };
    success?: ReservationApiDataSuccess;
};

// export interface GetReservationApiDataSuccess {
//     reservations: [
//         { 
//             id: number;
//             from: number;
//             to: number;
//             property: string;
//             pax: number;
//             flightNo: string;
//             driverNote: string;
//             selectedDate: Date;
//             timezone: number;
//             date: string;
//             time: string;
//         }
//     ]
// };

interface Reservation { 
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
};

export interface GetReservationApiDataSuccess {
    reservations: {
        confirmedReservations: [Reservation],
        unConfirmedReservations: [Reservation],
    }
};

export interface GetReservationApiData {
    error?: { message: string };
    success?: GetReservationApiDataSuccess;
};
  

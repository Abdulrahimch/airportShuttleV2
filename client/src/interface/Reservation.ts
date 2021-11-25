export interface FormLabels {
    type: string;
    from: string;
    to: string;
    pax: string;
    hotel: string;
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
    type: number;
    from: number;
    to: number;
    hotel: string;
    pax: number;
    flightNo: string;
    driverNote: string;
    selectedDate: Date;
    passengers: string[];
};



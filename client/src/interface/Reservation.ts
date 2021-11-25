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
    type: number;
    from: number;
    to: number;
    property: string;
    pax: number;
    flightNo: string;
    driverNote: string;
    selectedDate: Date;
    passengers: string[];
};



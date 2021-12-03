export interface Payment {
    type: String;
    note: String;
    paid: Number;
    currency: String;
    exchangeRate: Number;
    paidInTL: Number;
};

export interface PaymentApiDataSuccess {
    payment: Payment
};

export interface PaymentApiData {
    error?: { message: string };
    success?: Payment
};

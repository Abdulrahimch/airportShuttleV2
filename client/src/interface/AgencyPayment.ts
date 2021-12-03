export interface Payment {
    clientId: string;
    type: string;
    note: string;
    paid: number;
    currency: string;
    exchangeRate: number;
    paidInTL: number;
};

export interface PaymentApiDataSuccess {
    payment: Payment
};

export interface PaymentApiData {
    error?: { message: string };
    success?: Payment
};

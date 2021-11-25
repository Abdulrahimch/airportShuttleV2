export const NewReservationDictionary = {
    engPage: {
        title: 'add reservation',
        form: {
            type: 'type',
            from: 'from',
            to: 'to',
            pax: 'pax',
            hotel: 'hotel',
            fullName: 'full name',
            passenger: 'passenger',
            driverNote: 'driver note',
            flightNo: 'flight no',
            selectedDate: 'date and time of arrivale'
        }
    },
    turkishPage: {
        title: 'rezervasyon ekle',
        form: {
            type: 'tip',
            from: 'nerden',
            to: 'nereye',
            pax: 'pax',
            hotel: 'otel',
            fullName: 'ad soyad',
            passenger: 'yolcu',
            driverNote: 'sürücü notu',
            flightNo: 'uçuş no',
            selectedDate: 'variş tarihi ve saatı'
        }
    }
};

export const tabsDictionary = {
    englishTabs : [
        { label: 'new reservations', to: '/new-reservation' },
        { label: 'reservations', to: '/reservation' },
        { label: 'payments', to: '/payment' }
    ],
    turkishTabs : [
        { label: 'yeni rezervasyonlar', to: '/new-reservation' },
        { label: 'rezervasyonlar', to: '/reservation' },
        { label: 'finans', to: '/payment' }
    ]
};

export const AgencyTabsDictionary = {
  englishTabs : [
      { label: 'add client', to: '/add-client' },
      { label: 'reservations', to: '/agency-reservation' },
      { label: 'payments', to: '/agency-payment' }
  ],
  turkishTabs : [
      { label: 'müşteri ekle ', to: '/add-client' },
      { label: 'rezervasyonlar', to: '/agency-reservation' },
      { label: 'finans', to: '/agency-payment' }
  ]
};

export const clientPaymentDictionary = {
    engColumns:  [
        { 
          field: 'date', 
          headerName: 'Date', 
          width: 150 
        },
        { 
          field: 'time', 
          headerName: 'Time', 
          width: 150,
        },
        {
          field: 'type',
          headerName: 'Type',
          width: 150,
        },
        {
          field: 'paid',
          headerName: 'Paid',
          width: 150,
        },
        {
          field: 'currency',
          headerName: 'Currency',
          width: 150,
        },
        {
          field: 'debt',
          headerName: 'Debt',
          width: 150,
        },
        {
          field: 'note',
          headerName: 'Note',
          width: 400,
        },
    ],
    
    turksihColumns: [
      { 
        field: 'date', 
        headerName: 'Tarih', 
        width: 150 
      },
      { 
        field: 'time', 
        headerName: 'saat', 
        width: 150,
      },
      {
        field: 'type',
        headerName: 'Tip',
        width: 150,
      },
      {
        field: 'paid',
        headerName: 'Ödenen para ',
        width: 150,
      },
      {
        field: 'currency',
        headerName: 'Parabirimi',
        width: 150,
      },
      {
        field: 'debt',
        headerName: 'Borç',
        width: 150,
      },
      {
        field: 'note',
        headerName: 'Note',
        width: 400,
      },
    ]
};

export const clientReservationsDictionary = {
    engColumns: [
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
        },
        { 
          field: 'date', 
          headerName: 'Date', 
          width: 150 
        },
        { 
          field: 'pickUp', 
          headerName: 'Pick-up', 
          width: 150,
        },
        {
          field: 'flightNumber',
          headerName: 'Flight No',
          width: 150,
        },
        {
          field: 'from',
          headerName: 'From',
          width: 150,
        },
        {
          field: 'to',
          headerName: 'To',
          width: 150,
        },
        {
          field: 'pax',
          headerName: 'Pax',
          width: 120,
        },
        {
          field: 'note',
          headerName: 'Note/Hotel',
          width: 150,
        },
        {
          field: 'agencyFee',
          headerName: 'Agency Fee',
          width: 150,
        },
        {
          field: 'car',
          headerName: 'Car',
          width: 120,
        },
        {
          field: 'status',
          headerName: 'EDIT',
          width: 120,
        },
      ],
    turksihColumns: [
        {
          field: 'name',
          headerName: 'Isim',
          width: 150,
        },
        { 
          field: 'date', 
          headerName: 'Tarih', 
          width: 150 
        },
        { 
          field: 'pickUp', 
          headerName: 'Pick-up', 
          width: 150,
        },
        {
          field: 'flightNumber',
          headerName: 'Uçuş No ',
          width: 150,
        },
        {
          field: 'from',
          headerName: 'Nerden',
          width: 150,
        },
        {
          field: 'to',
          headerName: 'Nereye',
          width: 150,
        },
        {
          field: 'pax',
          headerName: 'Pax',
          width: 120,
        },
        {
          field: 'note',
          headerName: 'Note/Hotel',
          width: 150,
        },
        {
          field: 'agencyFee',
          headerName: 'Ajans Ücreti',
          width: 150,
        },
        {
          field: 'car',
          headerName: 'Araç',
          width: 120,
        },
        {
          field: 'status',
          headerName: 'EDIT',
          width: 120,
        },
    ]
};




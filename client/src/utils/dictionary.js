import { Button } from '@material-ui/core';
import CustomButton from '../components/Button/CustomButton';

export const NewReservationDictionary = {
    engPage: {
        title: 'add reservation',
        form: {
            type: 'type',
            from: 'from',
            to: 'to',
            pax: 'pax',
            property: 'property',
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
            property: 'emlak',
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

export const engColumn = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date and Time', 
      width: 300 
    },
    {
      field: 'flightNo',
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
      field: 'driverNote',
      headerName: 'Note/property',
      width: 150,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      width: 150,
    },
    {
      field: "Edit",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="edit"
            btnText="edit"
            onClick={() => handleEditClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Cancel",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Cancel"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const turksihColumns = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Traih va Saat', 
      width: 300 
    },
    {
      field: 'flightNo',
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
      field: 'driverNote',
      headerName: 'Note/Emlak',
      width: 150,
    },
    {
      field: 'cost',
      headerName: 'Ücret',
      width: 150,
    },
    {
      field: "Düzenle",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="edit"
          btnText="Düzenle"
          onClick={() => handleEditClick(cellValues)}
        />
        );
      }
    },
    {
      field: "Iptal",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="delete"
          btnText="Iptal"
          onClick={() => handleCancelClick(cellValues)}
        />
        );
      }
    }
  ];
  return columns;
};


export const agencyEngColumns = (handleProcessedClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date and Time', 
      width: 300 
    },
    {
      field: 'flightNo',
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
      field: 'driverNote',
      headerName: 'Note/property',
      width: 150,
    },
    {
      field: 'property',
      headerName: 'Property',
      width: 150,
    },
    {
      field: "Processed",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="processed"
            btnText="processed"
            onClick={() => handleProcessedClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Cancel",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Cancel"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const agencyTurksihColumns = (handleProcessedClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Traih va Saat', 
      width: 300 
    },
    {
      field: 'flightNo',
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
      field: 'driverNote',
      headerName: 'Note/Emlak',
      width: 150,
    },
    {
      field: 'property',
      headerName: 'Emlak',
      width: 150,
    },
    {
      field: "Düzenle",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="edit"
          btnText="Düzenle"
          onClick={() => handleProcessedClick(cellValues)}
        />
        );
      }
    },
    {
      field: "Iptal",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="delete"
          btnText="Iptal"
          onClick={() => handleCancelClick(cellValues)}
        />
        );
      }
    }
  ];
  return columns;
};

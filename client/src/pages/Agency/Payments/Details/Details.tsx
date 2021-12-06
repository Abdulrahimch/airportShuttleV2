import {  Box } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { useLanguage } from '../../../../context/useLanguageContext';
import { getClientReservation } from '../../../../helpers/APICalls/agencyReservation';
import { getClientPayments } from '../../../../helpers/APICalls/agencyPayment';
import { format } from 'date-fns';

import { 
        reservationDetailsEngColumns,  reservationDetailsTurksihColumns,
        paymentDetailsEngColumns, paymentDetailsTurkishColumns,
        totalDetailsEngColumns, totalDetailsTurkishColumns
        } from '../../../../utils/dictionary';

interface Props {
    clientId: string;
    debt: number;
};

interface Total {
    id: number;
    reservationTotal?: number;
    paymentTotal?: number;
    currency: string;
    debt: number;
}

function Details({ clientId, debt }: Props): JSX.Element {
    const { language } = useLanguage();
    const reservationColumns = language === 'eng' ? reservationDetailsEngColumns() : reservationDetailsTurksihColumns();
    const paymentColumns = language === 'eng' ? paymentDetailsEngColumns() : paymentDetailsTurkishColumns();
    const totalColumns = language === 'eng' ? totalDetailsEngColumns() : totalDetailsTurkishColumns();
    
    const [reservationRows, setReservationRows] = useState<any>([]);
    const [paymentRows, setPaymentRows] = useState<any>([]);

    const reservationTotal = useRef(0);
    const paymentTotal = useRef(0);
    const totalsRows = useRef<Total[]>([{id: 1, reservationTotal: 0, paymentTotal: 0, currency: 'TL', debt: debt}]); 

    
    useEffect(() => {
        getClientReservation(clientId).then((data) => {
            if (data.error) {
                console.log(data.error.message)
            } else if (data.success) {
                data.success.reservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate);
                    reservation.date = format(date, "dd-MM-yyyy kk:mm");
                    reservationTotal.current =  reservation.cost ? reservation.cost : 0;
                    
                    })
                totalsRows.current[0].reservationTotal = reservationTotal.current;
                setReservationRows(data.success.reservations);
                
            } else {
                console.log('External Error, please try again Later!')
            }
        });
        getClientPayments(clientId).then((data) => {
            if(data.error) {
                console.log(data.error.message)
            } else if (data.success) {
                data.success.payment.map((item, idx) => {
                    item.id = idx + 1;
                    item.property = item.client?.property;
                    paymentTotal.current = item.paidInTL;
                });
                totalsRows.current[0].paymentTotal = paymentTotal.current;
                setPaymentRows(data.success.payment);
                
            }
        });

        return () => {
            setReservationRows([]);
            setPaymentRows([]);
        }
    }, []);
    return (
        <>  
            <Box display='flex' flexDirection='column'>
                <DataTable rows={reservationRows} columns={reservationColumns}/>
                <DataTable rows={paymentRows} columns={paymentColumns} />
                <DataTable rows={totalsRows.current} columns={totalColumns} />
            </Box>
        </>
    )
}
export default Details
import {  Box } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { useLanguage } from '../../../../context/useLanguageContext';
import { getClientReservation, getClientReservationPaymentStat } from '../../../../helpers/APICalls/agencyReservation';
import { getClientPayments } from '../../../../helpers/APICalls/agencyPayment';
import { format } from 'date-fns';

import { 
        reservationDetailsEngColumns,  reservationDetailsTurksihColumns,
        paymentDetailsEngColumns, paymentDetailsTurkishColumns,
        totalDetailsEngColumns, totalDetailsTurkishColumns,
        detailsEngColumns, detailsTurksihColumns
        } from '../../../../utils/dictionary';
import Search from '../../../../components/Search/Search';

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
    const detailsColumns = language === 'eng' ? detailsEngColumns() : detailsTurksihColumns();
    
    const [reservationRows, setReservationRows] = useState<any>([]);
    const [paymentRows, setPaymentRows] = useState<any>([]);
    const [detailsRows, setDetailsRows] = useState<any>([]);
    const [useEffectTrigger, setUseEffectTrigger] = useState<boolean>(false);
    const [from, setFrom] = useState(new Date());
    const date = new Date();
    const [to, setTo] = useState(new Date(date.setHours(date.getHours() + 24)));


    const reservationTotal = useRef(0);
    const paymentTotal = useRef(0);
    const totalsRows = useRef<Total[]>([{id: 1, reservationTotal: 0, paymentTotal: 0, currency: 'TL', debt: debt}]); 

    const invokeUseEffect = () => {
        setUseEffectTrigger(!useEffectTrigger)
    };

    useEffect(() => {
        getClientReservationPaymentStat(clientId, from, to).then((data) => {
                let idx = 0;
                if (data.error) {
                    console.log(data.error)
                } else if (data.success) {
                    data.success.reservations.map((reservation) => {
                        reservation.id = idx + 1;
                        reservation.status = 'reservation'
                        const date = new Date(reservation.selectedDate);
                        reservation.date = format(date, "dd-MM-yyyy kk:mm");
                        reservationTotal.current =  reservation.cost ? reservation.cost : 0;
                        idx ++;
                        });
                    data.success.payments.map((item) => {
                        item.id = idx + 1;
                        item.property = item.client?.property;
                        item.status = 'payment'
                        const date = new Date(item.createdAt ? item.createdAt : new Date());
                        item.date = format(date, "dd-MM-yyyy kk:mm");
                        paymentTotal.current = item.paidInTL;
                        idx++
                    });
                    totalsRows.current[0].reservationTotal = reservationTotal.current;
                    totalsRows.current[0].paymentTotal = paymentTotal.current;
                    // setReservationRows(data.success.reservations);
                    // setPaymentRows(data.success.payments);
                    setDetailsRows((data.success.reservations.concat(data.success.payments)).sort(function(a, b) {return parseFloat(a.date) - parseFloat(b.date)}));                    
                } else {
                    console.log('External Error, please try again Later!')
                }
            });
    }, [useEffectTrigger]);
    
    return (
        <>  
            <Box display='flex' flexDirection='column'>
                <Search from={from} to={to} setFrom={setFrom} setTo={setTo} invokeUseEffect={invokeUseEffect}/>

                {/* <DataTable rows={reservationRows} columns={reservationColumns}/>
                <DataTable rows={paymentRows} columns={paymentColumns} /> */}
                <DataTable rows={detailsRows} columns={detailsColumns} />
                {/* <DataTable rows={totalsRows.current} columns={totalColumns} /> */}
            </Box>
        </>
    )
}
export default Details
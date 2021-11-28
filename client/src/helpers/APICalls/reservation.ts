import axios from 'axios';
import { FormValues, ReservationApiData, GetReservationApiData } from '../../interface/Reservation';

export const postReservation = async (inputs: FormValues): Promise<ReservationApiData> => {
    return await axios.post('./reservation/', inputs)
        .then((res) => res.data)
        .catch((error) => ({
            error: { message: 'error! please try again later' }
        })
    );
};

export const getReservations = async (): Promise<GetReservationApiData> => {
    return await axios.get('./reservation/')
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    );
};

export const deleteReservation = async (id: string): Promise<ReservationApiData> => {
    return await axios.delete(`reservation/${id}`)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    );
};


import axios from 'axios';
import { FormValues, ReservationApiData } from '../../interface/Reservation';

export const postReservation = (inputs: FormValues): Promise<ReservationApiData> => {
    return axios.post('./reservation/', inputs)
        .then((res) => res.data)
        .catch((error) => ({
            error: { message: 'error! please try again later' }
        }));
};

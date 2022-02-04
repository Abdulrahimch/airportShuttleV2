import axios from 'axios';
import { GetReservationApiData } from '../../interface/agencyReservation';

// export const getReservations = (): Promise<GetReservationApiData> => {
//     return axios.get('/agency-reservation')
//         .then((res) => res.data )
//         .catch((error) => error.response.data);
// };

interface Inputs {
    status?: string;
    confirmed?: boolean;
    driver?: string
}

export const updateReservation = (inputs: Inputs, id: string): Promise<GetReservationApiData> => {
    return axios.patch(`/agency-reservation/${id}`, inputs)
            .then((res) => res.data)
            .catch(error => error.response.data);
};

export const deleteReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.delete(`/reservation/${id}`)
                    .then((res) => res.data)
                    .catch(error => error.response.data);
};

export const getClientReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.get(`/agency-reservation/${id}`)
                    .then((res) => res.data)
                    .catch((error) => error.response.data);
};

export const getReservations = async (from: Date, to: Date): Promise<GetReservationApiData> => {
    return await axios.get(`/agency-reservation`, {
        params: {
            from: from,
            to: to
        }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

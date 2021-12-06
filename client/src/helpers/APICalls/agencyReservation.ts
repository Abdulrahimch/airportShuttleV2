import axios from 'axios';
import { GetReservationApiData } from '../../interface/agencyReservation';

export const getReservations = (): Promise<GetReservationApiData> => {
    return axios.get('/agency-reservation')
        .then((res) => res.data )
        .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    );
};

interface Status {
    status: string;
}

export const updateReservation = (inputs: Status, id: string): Promise<GetReservationApiData> => {
    return axios.patch(`/agency-reservation/${id}`, inputs)
            .then((res) => res.data)
            .catch(() => ({
            error: { message: 'error! please try again later' }
        })
    )
    
};

export const deleteReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.delete(`/reservation/${id}`)
                    .then((res) => res.data)
                    .catch(() => ({
                        error: { message: 'error! please try again later' }
                    })
                );
};

export const getClientReservation = async (id: string): Promise<GetReservationApiData> => {
    return await axios.get(`/agency-reservation/${id}`)
                    .then((res) => res.data)
                    .catch(() => ({
                        error: { message: 'error! please try again later' }
                    })
                );
};


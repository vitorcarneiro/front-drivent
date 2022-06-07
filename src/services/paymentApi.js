import api from './api';

export async function makePayment(token, body) {
  const response = await api.post('/accommodations/book', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getReservationById(token) {
  const response = await api.get('/accommodations/reservation', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

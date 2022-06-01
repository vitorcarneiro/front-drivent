import api from './api';

export async function makePayment(token, body) {
  const response = await api.post('/payment', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//

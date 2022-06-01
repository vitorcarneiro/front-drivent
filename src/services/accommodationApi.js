import api from './api';

export async function getRoomsByHotels() {
  const response = await api.get('/accommodations');
  return response.data;
}

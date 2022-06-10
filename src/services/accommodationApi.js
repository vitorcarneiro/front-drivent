import api from './api';

export async function getHotelsCapacity(token) {
  const response = await api.get('/accommodations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotels(token) {
  const response = await api.get('/accommodations/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getRooms(token, hotelId) {
  const response = await api.get(`/accommodations/rooms/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateRoom(token, roomId) {
  await api.patch(
    `/accommodations/rooms/${roomId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getReview(token, userId) {
  const response = await api.get(
    `/accommodations/${userId}/review`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

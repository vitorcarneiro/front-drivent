import useAsync from '../useAsync';
import useToken from '../useToken';

import * as accommodationApi from '../../services/accommodationApi';

export default function useRooms(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms,
  } = useAsync(() => accommodationApi.getRooms(token, hotelId), false);

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms,
  };
}

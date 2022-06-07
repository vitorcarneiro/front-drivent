import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useReservation() {
  const token = useToken();

  const {
    data: reservation,
    loading: reservationLoading,
    error: reservationError,
    act: getReservation,
  } = useAsync(() => paymentApi.getReservationById(token));

  return {
    reservation,
    reservationLoading,
    reservationError,
    getReservation,
  };
}

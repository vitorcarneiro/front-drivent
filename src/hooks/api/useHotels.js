import useAsync from '../useAsync';
import useToken from '../useToken';

import * as accommodationApi from '../../services/accommodationApi';

export default function useHotels() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels,
  } = useAsync(() => accommodationApi.getHotels(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels,
  };
}

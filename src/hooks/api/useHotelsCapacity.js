import useAsync from '../useAsync';
import useToken from '../useToken';

import * as accommodationApi from '../../services/accommodationApi';

export default function useHotelsCapacity() {
  const token = useToken();

  const {
    data: hotelsCapacity,
    loading: hotelsCapacityLoading,
    error: hotelsCapacityError,
    act: getHotelsCapacity,
  } = useAsync(() => accommodationApi.getHotelsCapacity(token));

  return {
    hotelsCapacity,
    hotelsCapacityLoading,
    hotelsCapacityError,
    getHotelsCapacity,
  };
}

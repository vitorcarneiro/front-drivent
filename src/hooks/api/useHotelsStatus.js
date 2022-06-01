import useAsync from '../useAsync';
import useToken from '../useToken';

import * as accommodationApi from '../../services/accommodationApi';

export default function useHotelsStatus() {
  const token = useToken();

  const {
    data: hotelsStatus,
    loading: hotelsStatusLoading,
    error: hotelsStatusError,
    act: getHotelsStatus,
  } = useAsync(() => accommodationApi.getHotelsStatus(token));

  return {
    hotelsStatus,
    hotelsStatusLoading,
    hotelsStatusError,
    getHotelsStatus,
  };
}

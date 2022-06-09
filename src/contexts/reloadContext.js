import { createContext, useState } from 'react';

const ReloadContext = createContext();
export default ReloadContext;

export function ReloadProvider({ children }) {
  const [reload, setReload] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      {children}
    </ReloadContext.Provider>
  );
}

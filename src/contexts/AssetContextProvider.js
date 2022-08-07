import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import useCompletionToast from '../components/hooks/useCompletionToast';
import { serverURL } from '../services/investmentService';

export const AssetContext = createContext(null);

export default function AssetContextProvider({ children }) {
  const [assets, setAssets] = useState([]);
  const [isLoadingAsset, setLoadingAsset] = useState(false);
  const { isAuthenticated } = useAuth0();

  const { getAccessTokenSilently } = useAuth0();
  const [showErrorToast] = useCompletionToast();

  const getAssetData = async () => {
    setLoadingAsset(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(`${serverURL}/api/activeAssets`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (results.data.data) {
        setAssets(results.data.data);
      }
      setLoadingAsset(false);
      // setMetamaskLogin(user.sub.startsWith('oauth2|siwe'));
    } catch (error) {
      showErrorToast(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAssetData();
    }
  }, []);

  return (
    <AssetContext.Provider
      value={useMemo(
        () => ({
          assets,
          setAssets,
          isLoadingAsset,
          setLoadingAsset,
          getAssetData
        }),
        [assets]
      )}>
      {children}
    </AssetContext.Provider>
  );
}

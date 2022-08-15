import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { createContext, useEffect, useMemo, useState } from 'react';
import useCompletionToast from '../components/hooks/useCompletionToast';
import { serverURL } from '../services/investmentService';

export const AssetContext = createContext(null);

export default function AssetContextProvider({ children }) {
  const [assets, setAssets] = useState([]);
  const [isLoadingAsset, setLoadingAsset] = useState(false);
  const { isAuthenticated } = useAuth0();
  const [refresh, setRefresh] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const { showErrorToast } = useCompletionToast();
  const [inventorySum, setInventorySum] = useState(0);

  const promptRefresh = () => setRefresh(!refresh);
  const calculateAssetSum = () => {
    if (assets?.length === 0) {
      setInventorySum(0);
    }

    let sum = 0;
    assets.forEach((asset) => {
      if (typeof asset?.price === 'number') {
        sum += asset.price * asset.position;
      }
    });

    setInventorySum(sum);
  };

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

      calculateAssetSum();
      setLoadingAsset(false);
    } catch (error) {
      showErrorToast(error.message);
      console.log(error);
      setLoadingAsset(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAssetData();
    }
  }, [refresh]);

  return (
    <AssetContext.Provider
      value={useMemo(
        () => ({
          assets,
          setLoadingAsset,
          getAssetData,
          promptRefresh,
          isLoadingAsset,
          refresh,
          inventorySum
        }),
        [assets, refresh, isLoadingAsset]
      )}>
      {children}
    </AssetContext.Provider>
  );
}

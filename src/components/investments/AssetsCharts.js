import { Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import chroma from 'chroma-js';
import { BarChart } from '../Charts';
import { AssetContext } from '../../contexts/AssetContextProvider';

export default function AssetsCharts() {
  const { assets, isLoadingAsset, getAssetData } = useContext(AssetContext);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    getAssetData();
  }, []);

  useEffect(() => {
    setChartData({
      labels: assets.map((asset) => asset.symbol),
      datasets: [
        {
          label: 'Amount',
          data: assets.map((asset) => asset.position * asset.cost_basis),
          backgroundColor: chroma.scale('Spectral').padding(0.7).colors(assets.length)
        }
      ]
    });
  }, [assets]);

  if (isLoadingAsset) return <div>Loading assets infographics ...</div>;

  return (
    <Flex
      width={500}
      flexDir="column"
      size="md"
      bgColor="white"
      borderRadius={15}
      boxShadow="lg"
      alignItems="center"
      px={2}
      paddingTop={3}
      paddingBottom={6}
      gap={3}
      display="inline-block">
      {chartData && <BarChart chartData={chartData} chartTitle="Investments" />}
    </Flex>
  );
}

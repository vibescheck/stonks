import { Button, useDisclosure } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import MetamaskModal from './MetamaskModal';

export default function MetamaskAsset() {
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState(null);
  const [isConnected, setConnected] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(()=> {}, [])

  const getBalance = (ethAddress) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [ethAddress, 'latest']
      })
      .then((weiBalance) => {
        setBalance(ethers.utils.formatEther(weiBalance));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const connectMetamask = async () => {
    if (!window.ethereum) {
      alert('Install MetaMask extension if you want to use this feature!');
      return;
    }

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((acc) => {
        setAddress(acc[0]);
        getBalance(acc[0]);
        setConnected(true);
      })
      .catch((err) => {
        console.log(err);
      });
    /* const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    }); */
  };

  return (
    <>
      {isConnected ? (
        <>
          <p>
            <strong>Address: </strong>
            {address?.slice(0, 4)}...{address?.slice(38, 42)}
          </p>
          <p>
            <strong>Balance: </strong>
            {balance} ETH
          </p>
        </>
      ) : (
        <p>Not Connected, Click below to connect</p>
      )}
      {isConnected ? (
        <>
          <Button
            onClick={() => {
              onOpen();
            }}>
            Save to Active Assets
          </Button>
          <MetamaskModal isOpen={isOpen} onClose={onClose} position={balance} />
        </>
      ) : (
        <Button onClick={() => connectMetamask()}>Connect to Metamask</Button>
      )}
    </>
  );
}

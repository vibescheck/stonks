import { Button, useDisclosure } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useState } from 'react';
import MetamaskModal from './MetamaskModal';

export default function MetamaskAsset() {
  const [provider, setProvider] = useState();
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [isConnected, setConnected] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getBalance = () => {
    // Requesting balance method
    provider?.getBalance(address).then((bal) => {
      // Setting balance
      setBalance(ethers.utils.formatEther(bal));
    });
  };
  const checkConnection = () => {
    if (!window.ethereum) return false;
    return window.ethereum.isConnected();
  };

  const connectMetamask = async () => {
    if (!window.ethereum) {
      alert('Install MetaMask extension if you want to use this feature!');
      return;
    }

    setProvider(new ethers.providers.Web3Provider(window.ethereum));

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    setAddress(accounts[0]);
    setConnected(true);
    getBalance();
  };

  return (
    <>
      {isConnected ? (
        <>
          <p>
            <strong>Address: </strong>
            {address?.slice(0.4)}...{address?.slice(38, 42)}
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

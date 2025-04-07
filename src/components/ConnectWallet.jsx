import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react'; // ✅ Import hook

const ConnectWallet = () => {
  const { open } = useWeb3Modal(); // ✅ Destructure `open` method
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="text-center">
      {isConnected ? (
        <>
          <p>🔗 Connected: {address}</p>
          <button className="btn btn-danger" onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={() => open()}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;

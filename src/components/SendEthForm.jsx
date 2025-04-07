// src/components/SendEthForm.jsx
import React, { useState } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';

const SendEthForm = () => {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [error, setError] = useState('');

  const handleSend = async () => {
    setError('');
    setTxHash('');

    if (!walletClient || !isConnected) {
      setError('Wallet not connected!');
      return;
    }

    try {
      const hash = await walletClient.sendTransaction({
        to: toAddress,
        value: parseEther(amount),
      });

      setTxHash(hash);
    } catch (err) {
      console.error(err);
      setError(err?.shortMessage || 'Transaction failed');
    }
  };

  return (
    <div className="mt-5 p-4 border rounded shadow">
      <h5>🚀 Send ETH</h5>
      <div className="mb-3">
        <label>Recipient Wallet Address:</label>
        <input
          type="text"
          className="form-control"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
          placeholder="0x..."
        />
      </div>
      <div className="mb-3">
        <label>Amount (in ETH):</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.001"
        />
      </div>
      <button className="btn btn-success" onClick={handleSend}>
        Send ETH
      </button>

      {txHash && (
        <div className="mt-3 alert alert-success">
          ✅ Sent! TX Hash: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">{txHash}</a>
        </div>
      )}
      {error && <div className="mt-3 alert alert-danger">❌ {error}</div>}
    </div>
  );
};

export default SendEthForm;

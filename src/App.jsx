// src/App.jsx
import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import SendEthForm from './components/SendEthForm';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Web3 Wallet (Sepolia)</h2>
      <ConnectWallet />
      <SendEthForm />
    </div>
  );
}

export default App;

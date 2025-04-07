import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WagmiProvider } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig, projectId, chains } from './web3/web3Config';
import { queryClient } from './web3/queryClient';
import 'bootstrap/dist/css/bootstrap.min.css';

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <App />
      </WagmiProvider>
    </QueryClientProvider>
);

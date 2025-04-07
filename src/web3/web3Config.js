// src/web3/web3Config.js
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { sepolia } from 'wagmi/chains';

const projectId = import.meta.env.VITE_WALLETCONECT_PROJECTID;

export const chains = [sepolia];

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'My Web3 App',
    description: 'WalletConnect Integration on Sepolia',
    url: 'http://localhost:5173',
    icons: ['https://yourdomain.com/icon.png'],
  },
});

export { projectId };

# Blockchain Integration with Wallet Connect

This project demonstrates how to integrate blockchain functionality in a React application using Vite. The main features include wallet connection, sending amounts to a wallet address, and querying blockchain data.

## Features
- Blockchain integration with wallet connection
- Send funds to a specific wallet address
- React frontend with state management
- Bootstrap and React Router for styling and navigation

## Setup Instructions

Follow the steps below to set up and run the project:

### 1. **Clone the Repository**

### 2. **Set Up the Project**
npm create vite@latest my-project --template react
cd my-project

### 3. **Install Dependencies**

npm install wagmi @wagmi/core @web3modal/wagmi viem @tanstack/react-query axios bootstrap fontawesome react-bootstrap react-redux react-router-dom react-simple-timestamp-to-date web3

### 3. **Environment Setup**

API keys and Project IDs: You will need an API key from Web3Modal and a Web3 provider setup to interact with blockchain networks.

Obtain your Web3Modal project ID from Web3Modal.

Set it in your .env or in your Web3 config files.

### 4. **Running the Project**
npm run dev

### 5. **Technologies Used**

React — JavaScript library for building user interfaces.

Vite — Next-generation, fast build tool for frontend development.

Web3Modal — Provides wallet connection modals for easy blockchain interaction.

wagmi — Provides hooks for interacting with Ethereum and other blockchain networks.

Bootstrap — CSS framework for responsive design.

axios — Promise-based HTTP client for making API requests.

FontAwesome — Icons for UI elements.

React-Bootstrap — Bootstrap components for React.

React-Redux — For state management across components.

Web3.js — To interact with the blockchain.

### 6. **Features**

**Wallet Connect**
We use the Web3Modal library to allow users to connect their wallets (like MetaMask or WalletConnect) to the app. Upon successful connection, users can interact with the blockchain, send transactions, and read data.

**Sending Amount to Wallet Address**
Once the user is connected to their wallet, the application allows them to send funds to any specified wallet address. This is done via the Web3 interaction.

**Blockchain Integration**
Using wagmi and web3.js, the app communicates with the blockchain network (e.g., Ethereum) to send and receive transactions. The app uses Web3Modal to open wallet connection modals and send transactions.

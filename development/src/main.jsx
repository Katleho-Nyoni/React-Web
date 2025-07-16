// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './media.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhmZuxfWJUm50dycnuADjzYCPIielKGHw",
  authDomain: "data-group-864b9.firebaseapp.com",
  projectId: "data-group-864b9",
  storageBucket: "data-group-864b9.firebasestorage.app",
  messagingSenderId: "646512980093",
  appId: "1:646512980093:web:b1100e4757bb24f4f50114",
  measurementId: "G-H2BD0PLNQT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

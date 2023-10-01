import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAws3n0dFQd6oK32yeYFZ2ZVnLFOpnQky8",
  authDomain: "my-react-blog-92faf.firebaseapp.com",
  projectId: "my-react-blog-92faf",
  storageBucket: "my-react-blog-92faf.appspot.com",
  messagingSenderId: "308818040967",
  appId: "1:308818040967:web:e7241b5b8215694e1fc022"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

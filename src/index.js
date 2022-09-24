// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Login from './pages/Login';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//       <Login />
//     {/* </BrowserRouter> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.scss";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Register from "./pages/Register";
import Navigation from "./Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        {/* <BrowserRouter> */}
          <Navigation />
        {/* </BrowserRouter> */}
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
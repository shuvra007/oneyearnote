import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { store } from "./redux/store";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>

< Provider store={store}>
     <App/>

 </Provider>


  </HelmetProvider>

     
);

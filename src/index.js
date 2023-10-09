import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./Redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

		<BrowserRouter>
			<StoreProvider>
				<App />
				<ToastContainer />
			</StoreProvider>
		</BrowserRouter>

);
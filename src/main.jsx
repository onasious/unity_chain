import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
// @ts-ignore
import Hr from './page/hr/Hr';
import Inventory from './page/iventory/Inventory';
import Accountant from './page/accountant/Accountant'
import Settings from './page/settings/Settings'
import Profile from './page/profile/Profile'
import Login from './auth/Login'; 
import InventoryPage from './page/iventory/Inventory';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   <Route path="/" element={<Login />} /> {/* Default route to login */}
      <Route path="/app" element={<App />}>
        <Route path="hr" element={<Hr />} />
        <Route path="inventory" element={<InventoryPage/>} />
        <Route path="accountant" element={<Accountant />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
)
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

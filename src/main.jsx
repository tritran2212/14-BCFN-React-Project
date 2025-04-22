import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
// link global style
import "@fontsource/inter";
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router'
import { router } from './route/router.js'
import { store } from './store/store.js'

import {Provider}  from "react-redux"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)

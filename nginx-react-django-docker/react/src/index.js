import './index.css';
// import './bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsDetailsScreen from './screen/NewsDetailsScreen.js'
import {Provider}  from 'react-redux';
import store from './store/store.js'
import NewsCategory from './components/body/NewsCategory.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginScreen from './screen/LoginScreen.js';
import RegisterScree from './screen/RegisterScree.js';
import ContactScreen from './screen/ContactScreen.js';

const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path: '/news/detail/:id', element: <NewsDetailsScreen />},
  {path: '/news/:category', element: <NewsCategory />},
  {path: '/login', element: <LoginScreen/>},
  {path: '/register', element: <RegisterScree />},
  {path: '/contact', element: <ContactScreen />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={router} /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

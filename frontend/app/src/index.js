import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Menu />
        <div>Hello world!</div>
      </>
    ),
  },
  {
    path: '/contacts',
    element: (
      <>
        <Menu />
        <div>Contacts</div>
      </>
    ),
  },
  {
    path: '/todos',
    element: (
      <>
        <Menu />
        <App />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

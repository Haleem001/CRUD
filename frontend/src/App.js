import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import { useState } from 'react';

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/defaultlayout'))

// Pages
const Login = React.lazy(() => import('./components/Login'))




// const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
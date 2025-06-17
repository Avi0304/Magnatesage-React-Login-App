import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProtectedRoute from './ProtectedRoute';
import DynamicPage from './page/DynamicPage';
import PublicROute from './PublicROute';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicROute />} >
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/page/:number' element={<DynamicPage />} />
          </Route>
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import { isLoggedIn } from './utils'
import { Navigate, Outlet } from 'react-router-dom'

// Protects nested routes by checking login status
// If Not authenticated, redirects to login page.
const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace/>
}

export default ProtectedRoute
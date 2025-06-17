import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn, getLastPage } from './utils'

/***
publicRoutes prevent logged-in user from accessing page like login or signup
Redirect authenticated user to the last visited page
***/

const PublicROute = () => {
    return isLoggedIn() ? <Navigate to={getLastPage()} replace /> : <Outlet />
}

export default PublicROute
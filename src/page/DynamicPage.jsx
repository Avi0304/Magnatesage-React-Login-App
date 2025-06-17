import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PageX from './PageX';

const DynamicPage = () => {

    const {number} = useParams();
    const pageNumber = parseInt(number, 10);

    // Redirect if page number is invalid or out of range
    if(isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10){
        return <Navigate to="/page/1" replace/>
    }

    return <PageX number={pageNumber} />
}

export default DynamicPage
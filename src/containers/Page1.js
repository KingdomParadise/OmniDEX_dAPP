import React from 'react'
import Sidebar from '../components/Sidebar'
import Page1Body from './Page1Body'

 const Page1 = () =>  {
    return (
        <div className='d-flex'>
            <Sidebar />
            <Page1Body />
        </div>
      
    )
}

export default Page1
import React from 'react'
import Page1Header from '../components/Page1Header'
import '../assets/styles/page1.css'
 const Page1Body = () =>  {
    return (
        <div className='page1BodyContainer'>
            <Page1Header />
            <div className="d-flex justify-content-center mt-5">
                <h1>Main content</h1>
            </div>
        </div>
      
    )
}

export default Page1Body
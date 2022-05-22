import React from 'react'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './home.css'

function home() {
    return (
        <>

        <div className='home_container'>

            <Posts />
            <Sidebar />
        </div>
        </>

    )
}

export default home

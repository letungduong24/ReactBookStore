import React from 'react'
import NavBar from './NavBar'
import About from './About'
import AdminPanelNav from './AdminPanelNav'
import BookDashboard from './BookDashboard'
import UserManager from './UserManager'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard'

const AdminPanel = () => {
  return (
    <div className=''>
        <NavBar />
        <div className='py-10 bg-gradient-to-r from-amber-50 to-orange-200'>
            <div className="container px-10 md:px-20 w-full mx-auto">             
                <div className="flex flex-col lg:grid grid-cols-5 grid-rows-1 gap-4 bg-white">
                    <AdminPanelNav />
                    <div className="col-span-4">
                        <Routes>
                            <Route path='/' element={<Dashboard />} /> 
                            <Route path='/books/*' element={<BookDashboard />} /> 
                            <Route path='/users' element={<UserManager />} /> 
                        </Routes>
                    </div>
                </div>
            </div>
        </div>  
        <About />
    </div>
  )
}

export default AdminPanel
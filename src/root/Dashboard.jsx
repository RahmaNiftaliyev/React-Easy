import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GettingStarted from '../features/layouts/GettingStarted/GettingStarted'
import Home from './../features/layouts/Home'

import Login from './../features/layouts/Registration/Login'
import Register from './../features/layouts/Registration/Register'
const Dashboard = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/register"} element={<Register/>} />
            <Route path={"/getting-started"} element={<GettingStarted/>}/>
        </Routes>
    </div>
  )
}

export default Dashboard

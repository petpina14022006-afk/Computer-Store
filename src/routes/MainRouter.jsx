import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../page/Home'

const MainRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>} />
                <Route />
                <Route />
                <Route />
                <Route />
            </Route>
            <Route path='*' element={"Not found"}/>
        </Routes> 
    </>
  )
}

export default MainRouter

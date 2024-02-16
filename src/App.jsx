import React, { useEffect, useState } from 'react'
import About from './Component/About/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Contact from './Component/Portfolio/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'

export default function App() {
  let router= createBrowserRouter([{
    path:'',element:<Layout/> ,children:[

      {path:'/contact', element:<Contact/>},
      {index:true, element:<About/>},
      {path:'/portfolio', element:<Portfolio/>},
   
     

    ]

  }])
 
  return (
    <>
    
 <RouterProvider router={router}></RouterProvider>

  
    </>
  )
}

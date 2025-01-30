import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"



let x = createBrowserRouter(
  [
    {path: "" , element: <Layout /> , 
      children : [ 
      { index : true , element: <Home /> },
      {path: "about" , element: <About /> },
      {path: "contact" , element:<Contact />  },
      {path: "portfolio" , element: <Portfolio /> },
  ]
},
   
  ])

export default function App() {

  return (
  <>
<RouterProvider router={x} />
    
  </>)
}



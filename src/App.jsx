import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Layouts/Root'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import { ChakraProvider, theme } from '@chakra-ui/react'
import AboutUs from './Pages/AboutUS'
import WhatWeDo from './Pages/WhatWeDo'

const App = () => {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element={ <Root />}>
        <Route index element={ <Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
         <Route path='/about-us' element={<AboutUs />} />
         <Route path='/what-we-do' element={<WhatWeDo />} />
      </Route>
    )
  )
  return (
    <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App

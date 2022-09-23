import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inventory from './views/inventory'

function App (): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

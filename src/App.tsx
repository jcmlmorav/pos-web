import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inventory from './views/inventory'
import InventoryNew from './views/inventory-new'

function App (): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/inventario/registrar" element={<InventoryNew />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

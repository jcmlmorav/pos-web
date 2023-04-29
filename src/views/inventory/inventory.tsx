import React, { ReactElement } from 'react'
import WithLayout from '../../layout/WithLayout'
import { Routes, Route } from 'react-router-dom'
import InventoryList from '../inventory-list'
import InventoryNew from '../inventory-new'
import InventoryView from '../inventory-view'

const Inventory = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<InventoryList />} />
      <Route path="registrar" element={<InventoryNew />} />
      <Route path="ver/:productId" element={<InventoryView />} />
    </Routes>
  )
}

export default WithLayout(Inventory)

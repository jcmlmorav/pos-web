import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Inventory from './views/inventory'
import { GET_PRODUCTS } from './queries/product'

function App (): ReactElement {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error != null) return <p>Error...</p>

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventory data={data.products} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

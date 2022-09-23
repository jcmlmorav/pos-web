import React, { ReactElement } from 'react'
import WithLayout from '../../layout/WithLayout'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../queries/product'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Inventory = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) {
    return (
      <Box style={{ display: 'flex', justifyContent: 'center', padding: '2em' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error != null) {
    return (
      <Alert severity="error">Ocurrió un problema al obtener la información</Alert>
    )
  }

  return (
    <>
      <Box sx={{ pt: 9 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.products.map((product: Record<string, any>) => (
                <TableRow
                  key={product.id as string}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.code}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.inventory}</TableCell>
                  <TableCell align="right">{product.available === true ? 'Disponible' : 'Agotado'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default WithLayout(Inventory)

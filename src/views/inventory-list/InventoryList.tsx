import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../queries/product'
import { Link } from 'react-router-dom'
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
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import EyeIcon from '@mui/icons-material/RemoveRedEye'

const InventoryList = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
    <Box gap={2} display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h6" component="h2">Listado de poductos</Typography>
      <Divider />
      <Typography variant="subtitle1" align='right'>
        <Link to="registrar">Registrar producto</Link>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.products.length === 0) && (
              <TableRow>
                <TableCell component="th" scope="row" colSpan={4}>
                  <Typography variant="subtitle2" align="center">No hay productos registrados</Typography>
                </TableCell>
              </TableRow>
            )}
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
                <TableCell align="right">
                  <ButtonGroup>
                    <Button component={Link} to={`ver/${product.id as string}`} aria-label="Ver producto">
                      <EyeIcon />
                    </Button>
                    <Button component={Link} to="editar" aria-label="Editar producto">
                      <EditIcon />
                    </Button>
                    <Button component={Link} to="eliminar" aria-label="Eliminar producto">
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default InventoryList

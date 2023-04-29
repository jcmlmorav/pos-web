import React, { ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const InventoryView = (): ReactElement => {
  const { productId } = useParams()

  return (
    <>
      <Typography variant="h6" component="h2">Detalles del producto</Typography>
        <Divider />
        <Typography variant="subtitle1" align='left'>
          <Link to="/">Ir atrás</Link>
        </Typography>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle2">
              ID del Producto
            </Typography>
            <Typography variant="body1">
              {productId}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle2">
              Código
            </Typography>
            <Typography variant="body1">
              15a14f5a4d8fa45sd1fa5sdf8
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle2">
              Nombre
            </Typography>
            <Typography variant="body1">
              15a14f5a4d8fa45sd1fa5sdf8
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle2">
              Unidades en inventario
            </Typography>
            <Typography variant="body1">
              15a14f5a4d8fa45sd1fa5sdf8
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="subtitle2">
              Producto disponible
            </Typography>
            <Typography variant="body1">
              15a14f5a4d8fa45sd1fa5sdf8
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default InventoryView

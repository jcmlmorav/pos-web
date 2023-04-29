import React, { ReactElement, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CREATE_PRODUCT, GET_PRODUCTS } from '../../queries/product'

interface Inputs {
  code: string
  name: string
  inventory: number
  available: boolean
}

const InventoryNew = (): ReactElement => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [
      { query: GET_PRODUCTS }
    ]
  })

  useEffect(() => {
    if (data !== undefined) {
      navigate('/')
    }
  }, [data])

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createProduct({
      variables: {
        code: data.code,
        name: data.name,
        inventory: parseInt(`${data.inventory}`),
        available: data.available
      }
    })
  }

  return (
    <>
      <Typography variant="h6" component="h2">Registro de productos</Typography>
      <Divider />
      <Typography variant="subtitle1" align='left'>
        <Link to="/">Ir atrás</Link>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Código*"
            error={'code' in errors}
            helperText={'code' in errors && 'Este campo es requerido'}
            {...register('code', {
              required: true
            })}
          />
          <TextField
            label="Nombre*"
            error={'name' in errors}
            helperText={'name' in errors && 'Este campo es requerido'}
            {...register('name', {
              required: true
            })}
          />
          <TextField
            defaultValue={0}
            label="Cantidad en inventario"
            type="number"
            {...register('inventory')}
          />
          <FormControlLabel
            control={<Switch {...register('available')} />}
            label="Disponible"
            labelPlacement="start"
          />
          { loading
            ? (
              <CircularProgress />
              )
            : (
              <Button type="submit" variant="contained">Registrar producto</Button>
              )
          }
          { error !== undefined && (
            <Alert severity="error">Ocurrió un error al guardar la información</Alert>
          )}
        </Box>
      </form>
    </>
  )
}

export default InventoryNew

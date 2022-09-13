import React from 'react';
import Header from '../../components/header';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: string,
  name: string,
  quantity: number,
  available: boolean
) {
  return { id, name, quantity, available };
}

const rows = [
  createData('1', 'Papa', 15, true),
  createData('2', 'Platano', 200, true),
  createData('3', 'Yuca', 62, false)
];

function Inventory() {
  return (
    <>
      <Header />
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.available ? 'Disponible' : 'Agotado'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Inventory;

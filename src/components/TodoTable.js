import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

export default function TodoTable() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {todos.map((todo, idx) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
              <TableCell align="right">{todo.name}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
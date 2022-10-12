import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import { pushTodo } from '../redux/todoSlice';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const BasicForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h5" component="h5" align="center" gutterBottom>
        TODO
      </Typography>
      <Formik
        initialValues={{
          todo: ''
        }}
        onSubmit={(values) => {
          console.log(values)
          dispatch(pushTodo(values.todo));
        }}
      >
        {props => (
          <Form>
            <label htmlFor="todo">Add ToDo </label>
            {/* <Field id="todo" name="todo" placeholder="TextHere" /> */}
            <TextField
              fullWidth
              id="todo"
              name={"todo"}
              label="Add ToDo"
              type="text"
              margin="normal"
              onChange={props.handleChange}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        )}

      </Formik>
    </>
  );
}

export default BasicForm

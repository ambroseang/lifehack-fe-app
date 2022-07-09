import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';

export const AddNew = (props) => {
  const { shoppingList, setShoppingList } = props;

  const [values, setValues] = useState({
    name: '',
    quantity: '',
  });
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [reccomendedQuantity, setReccomendedQuantity] = useState(0);

  useEffect(() => {
    setReccomendedQuantity(15);
  }, [])

  useEffect(() => {
    setCurrentQuantity(6);
  }, [values.name])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAdd = () => {
    const newShoppingList = [...shoppingList];
    newShoppingList.push({
      name: values.name,
      quantity: values.quantity,
      checked: false,
    });
    setShoppingList(newShoppingList);

    setValues({
      name: '',
      quantity: '',
    });
  }

  const renderHelper = () => {
    if (values.name === '') return

    return `Current: ${currentQuantity}, Reccomended Total: ${reccomendedQuantity}`
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Add new items into the shopping cart "
          title="Add New"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                onChange={handleChange}
                required
                value={values.quantity}
                variant="outlined"
                type={'number'}
                helperText={renderHelper()}
              />
            </Grid>
          </Grid>
        </CardContent>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
            mr: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            size={'large'}
            onClick={() => handleAdd()}
          >
            Add
          </Button>
        </Box>
      </Card>
    </form>
  );
};

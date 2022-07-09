import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ShoppingList } from '../components/shopping-cart/shopping-list';
import { AddNew } from '../components/shopping-cart/add-new';
import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';

const ShoppingCart = () => {
  const [shoppingList, setShoppingList] = useState([
    {
      name: 'Prawns',
      quantity: '10',
      checked: false,
    },
    {
      name: 'Tomato',
      quantity: '3',
      checked: false,
    },
    {
      name: 'Pasta',
      quantity: '2',
      checked: false,
    },
  ]);

  return (
    <>
      <Head>
        <title>
          Shopping Cart
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Shopping Cart
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <ShoppingList
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
              />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AddNew
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

ShoppingCart.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ShoppingCart;

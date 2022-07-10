import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';

const Products = () => {
  const [filterBy, setFilterBy] = useState('')

  const changeFilter = (e) => {
    console.log(e.target.value)
    setFilterBy(e.target.value)
  }



  const filter = (products) => {
    if (filterBy === ''){
      return products
    }
    else{
      return(products.filter(product => {
        return (product.name.toLowerCase().includes(filterBy))
      }))
    }
  }

  useEffect(() => {
  },[filterBy])

  return(
  <>
    <Head>
      <title>
        Fridge
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar changeFilter={changeFilter}/>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {filter(products).map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
)};

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;

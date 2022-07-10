import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InventoryIcon from '@mui/icons-material/Inventory';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DateRangeIcon from '@mui/icons-material/DateRange';
// import "@fontsource/poppins";
import { Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const ProductCard = ({ product, ...rest }) => {

const [ isExpanded, setExpanded ] = useState(false);

function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally
        setExpanded(!isExpanded);
    }

  useEffect(()=>{

  },[isExpanded])

  return(
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
    {...rest}
  >
    <CardContent style={{backgroundColor: "89cff0"}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        onClick={handleOnClick}
      >
        { product.grams?`${product.grams}g of `:''}
        {product.name}
        { product.quantity?` X ${product.quantity}`:''}
        {" "}
        {isExpanded?
        <ArrowDropUpIcon color="action"/>:
        <ArrowDropDownIcon color="action" /
        >}
      </Typography>

    </CardContent>
    <Divider />
    <Box sx={{ p: 2 }}>



    <Grid
      item
      xs={12}
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
      >
      <WarningAmberIcon color="action" />
      <Typography

        color="textSecondary"
        display="inline"
        sx={{ pl: 1 }}
        variant="body2"
      >
        { product.expiryDate?`Expiry Date: ${product.expiryDate}`:''}

      </Typography>
      </Grid>
    </Box>

  <Box sx={{ flexGrow: 1 }} />

    <Collapse in={isExpanded}>
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center' ,
              display:'flex'
            }}
      >
        <Grid
          item
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <InventoryIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            { product.quantity || product.grams?`Quantity: `:'' }
            { product.quantity?` ${product.quantity} unit(s) `:''}
            { product.quantity && product.grams?`of `:'' }
            { product.grams?`${product.grams} grams`:''}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            { product.daysBeforeExpiringNotifaction?`Notify ${product.daysBeforeExpiringNotifaction} days before expiration`:''}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <FastfoodIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            { product.opened?`Opened: ${product.openedDate}`:`Not Opened`}

          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <DateRangeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            { product.createdAt?`Created: ${product.createdAt}`:''}
          </Typography>
        </Grid>
        <Grid
        item
        xs={12}>
          <Box mr={2} pt={2}>
            <Button variant='contained'>Opened Today</Button> </Box>
          <Box mr={2} pt={1}>
          <Button variant='contained'>Consumed</Button>
          </Box>
          <Box mr={2} pt={1}>
            <Button m={3} color="error" variant='contained'>Discard</Button>
          </Box>

        </Grid>

      </Grid>
    </Box>

    </Collapse>
  </Card>
)};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

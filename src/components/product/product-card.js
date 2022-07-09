import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InventoryIcon from '@mui/icons-material/Inventory';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "@fontsource/poppins";

export const ProductCard = ({ product, ...rest }) => (
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
        fontFamily="Poppins"
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.name}
      </Typography>
    </CardContent>

    <Box sx={{ flexGrow: 1 }} />
    <Divider />


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

      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

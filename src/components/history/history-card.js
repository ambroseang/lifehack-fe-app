import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardContent, Collapse, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import PaidOutlined from '@mui/icons-material/PaidOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useEffect, useState } from 'react';

export const HistoryCard = ({ product, ...rest }) => {

  const [isExpanded, setExpanded] = useState(false);

  function handleOnClick() {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
  }

  useEffect(() => {

  }, [isExpanded])

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      {...rest}
    >
      <CardContent style={{ backgroundColor: "89cff0" }}>
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
          Receipt Number: {product.id.substring(0,8)}
          {" "}
          {isExpanded ?
            <ArrowDropUpIcon color="action" /> :
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
          <CalendarTodayOutlined color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {`Purchase Date: ${product.expiryDate}`}

          </Typography>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Collapse in={isExpanded}>
        <Box sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'center',
              display: 'flex'
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
              <PaidOutlined color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {`Total Spending: $${product.quantity}`}
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
                Supermarket: Cold Storage
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}>
              <Box
                mr={2}
                pt={2}
              >
                <Button variant='contained'>View More Details</Button>
              </Box>

            </Grid>

          </Grid>
        </Box>

      </Collapse>
    </Card>
  )
};

HistoryCard.propTypes = {
  product: PropTypes.object.isRequired
};

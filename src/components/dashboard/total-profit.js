import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL SAVINGS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $23k
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              pt: 2
            }}
          >
            <ArrowUpwardIcon color="success" />
            <Typography
              variant="body2"
              sx={{
                mr: 1
              }}
            >
              16%
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

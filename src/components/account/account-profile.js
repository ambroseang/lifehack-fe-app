import {
  Avatar,
  Box,
  LinearProgress,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Katarina Smith',
  memberTier: 'Silver'
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.memberTier} Tier
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Box
        sx={{
          width: '100%',
          p: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
          <Typography
            sx={{ mr: 2 }}
            color="silver"
            variant="h6"
          >
            Silver
          </Typography>

        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={50}
            color="success"
          />
        </Box>

        <Typography
          sx={{ mr: 2 }}
          color="gold"
          variant="h6"
        >
          Gold
        </Typography>
      </Box>
    </CardActions>
  </Card>
);

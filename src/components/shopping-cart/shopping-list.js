import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export const ShoppingList = (props) => {
  const { shoppingList, setShoppingList } = props;

  const handleToggle = (item) => {
    item.checked = !item.checked;
    setShoppingList([...shoppingList]);
  }

  const handleRemoveChecked = () => {
    const newShoppingList = []
    
    shoppingList.forEach((item) => {
      if (item.checked === false) newShoppingList.push(item);
    })

    setShoppingList(newShoppingList);
  }

  return (
    <Card {...props}>
      <CardContent>
        <List
          dense
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper'
          }}
        >
          {shoppingList.map((item) => {
            const labelId = `checkbox-list-secondary-label-${item.name}`;
            return (
              <ListItem
                key={item.name}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={() => handleToggle(item)}
                    checked={item.checked}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton onClick={() => handleToggle(item)}>
                  <ListItemText
                    id={labelId}
                    primary={item.name}
                    secondary={item.quantity}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <Button
          fullWidth
          color="error"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => handleRemoveChecked()}
        >
          Remove All Checked Items
        </Button>
      </CardContent>
    </Card>
  )
}
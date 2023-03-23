import { Button } from '@mui/material'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DriveIcon from '@mui/icons-material/DriveEta';
import IconButton from '@mui/material/IconButton';

 function NewNavBar () {
    return (
    <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <DriveIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    );
}
export default NewNavBar;



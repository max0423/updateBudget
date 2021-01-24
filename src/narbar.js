// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';

// const Narbar = ()=><AppBar title = "Student Budget" />

// export default Narbar;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'

export default function Narbar() {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>    
          <Typography variant="h6" >
            Student Budget
          </Typography>     
        </Toolbar>
      </AppBar>
    </div>
  );
}

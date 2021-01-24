import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Narbar from './narbar';
import Student from './student';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
        <Narbar />
        <Student></Student>
    </div>
    </MuiThemeProvider>
  );
}

export default App;

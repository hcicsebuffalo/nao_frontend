import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,
  Route } from 'react-router-dom';
import { Routing } from './routes/routes';
import history from './services/history'
// import { login } from './components/login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createMuiTheme({
//   
// });

const theme = createTheme({
  palette: {
    background: {
      default: '#CD5C5C', // replace with desired color
    },
  },
});

export const SettingsContext = createContext();


export class App extends React.Component {
  render(){
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routing />
          </Router>
        </ThemeProvider>
        
      </div>
    );
  } 
}

export default App;
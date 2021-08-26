import React from 'react';
import Home from './Components/organisms/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Auth0Provider } from "@auth0/auth0-react";

function App() 
{
  return (
    <Auth0Provider
    domain="sanathkumar.us.auth0.com"
    clientId="FD5icyzLA0lcqn4EPM1SKEnwNsRsTnea"
    redirectUri={window.location.origin}>
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
    </Auth0Provider>
  );
}
export default App;

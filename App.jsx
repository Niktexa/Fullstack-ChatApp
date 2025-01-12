
import axios from 'axios'
import {UserContextProvider} from "./UserContext"
import Routes from "./routes";
import React from 'react';
import RegisterAndLoginForm from './RegisterAndLoginForm'; // Adjust the path if necessary


function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App

// import { useEffect } from 'react';
import './app.css'
import LoginPage from './components/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_CLIENT_ID } from './utils/constants';

import { createBrowserRouter } from 'react-router-dom';

import DashBoard from './components/DashBoard';

export const appRouter = createBrowserRouter([
{

  path:"/",
  element:<App/>
},
{
  path:"/dashboard",
  element:<DashBoard/>
}

])

function App() {

  return (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <LoginPage/>
  </GoogleOAuthProvider>

  );
}

export default App;

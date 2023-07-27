import { Routes, Route } from 'react-router-dom';
import { LoginRouter } from '../App/router/LoginRouter';
import { MainRouter } from '../Auth/routes/MainRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useContext } from 'react';
import { AuthContext } from '../Auth/context/AuthContext';


export const AppRouter = () => {

  const { userState } = useContext(AuthContext);
  const { user } = userState;

  const isLogged = user?.status === true;

  return (
    <Routes>
      <Route path='login/*' element={
        <PublicRoutes>
          { !isLogged && <LoginRouter /> }
        </PublicRoutes>
      } />

      <Route path="/*" element={
        <PrivateRoutes>
          { isLogged && <MainRouter /> }
        </PrivateRoutes>
      } />
    </Routes>
  )
}

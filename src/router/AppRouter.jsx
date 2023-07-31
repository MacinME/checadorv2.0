import { useContext } from 'react';
import { DashboardPage } from '../pages';
import { PublicRoutes, PrivateRoutes, LoginRouter, MainRouter } from './';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';


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

      <Route path="dashboard" element={ <DashboardPage /> } />
    </Routes>
  )
}

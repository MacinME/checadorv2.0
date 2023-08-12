import { PublicRoutes, PrivateRoutes, LoginRouter, MainRouter } from './';
import { Route, Routes } from 'react-router-dom';
import { PrivateAuth } from './PrivateAuth';
import { AuthRoute } from './AuthRoute';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='login/*' element={
        <PublicRoutes>
          <LoginRouter />
        </PublicRoutes>
      } />

      <Route path="/*" element={
        <PrivateRoutes>
          <MainRouter />
        </PrivateRoutes>
      } />

      <Route path="dashboard/*" element={ 
          <PrivateAuth>
            <AuthRoute />
          </PrivateAuth>
       } />
    </Routes>
  )
}

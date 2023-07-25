import { Routes, Route } from 'react-router-dom';
import { LoginRouter } from '../App/router/LoginRouter';
import { MainRouter } from '../Auth/routes/MainRouter';
import { AuthProvider } from '../Auth/context/AuthProvider';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';


export const AppRouter = () => {
  return (
    <AuthProvider>
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
        </Routes>
    </AuthProvider>
  )
}

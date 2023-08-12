import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages';

export const AuthRoute = () => {
  return (
    <Routes>
        <Route path="home" element={ <DashboardPage /> } />
        <Route path="/*" element={ <Navigate to="/dashboard/home" /> } />
    </Routes>
  )
}

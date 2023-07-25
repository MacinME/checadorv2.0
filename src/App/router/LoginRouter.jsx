import { Navigate, Route, Routes } from 'react-router-dom';
import { SingUp } from '../pages/SingUp';

export const LoginRouter = () => {
  return (
    <Routes >
        <Route path="/" element={ <SingUp /> } />
        <Route path="/*" element={ <Navigate to='/login' /> } />
    </Routes>
  )
}

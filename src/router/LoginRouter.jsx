import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUpPage } from '../pages';

export const LoginRouter = () => {
  return (
    <Routes >
        <Route path="/" element={ <SignUpPage /> } />
        <Route path="/*" element={ <Navigate to='/login' /> } />
    </Routes>
  )
}

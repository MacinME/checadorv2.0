import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginClass } from '../../App/pages/LoginClass';

export const MainRouter = () => {
  return (
    <Routes >
        <Route path="checador" element={ <LoginClass  /> } />
        <Route path="/*" element={ <Navigate to='/checador' /> } />
    </Routes>
  )
}

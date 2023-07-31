import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckerPage } from '../pages';

export const MainRouter = () => {
  return (
    <Routes >
        <Route path="checador" element={ <CheckerPage  /> } />
        <Route path="/*" element={ <Navigate to='/checador' /> } />
    </Routes>
  )
}

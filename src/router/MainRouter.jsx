import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckerPage } from '../pages';
import { RegisterProvider } from '../context';

export const MainRouter = () => {
  return (
    <RegisterProvider>
      <Routes >
          <Route path="checador" element={ <CheckerPage  /> } />
          <Route path="/*" element={ <Navigate to='/checador' /> } />
      </Routes>
    </RegisterProvider>
  )
}

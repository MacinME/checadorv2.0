import {
    Routes,
    Route
} from 'react-router-dom'
import { LoginRouter } from '../App/router/LoginRouter';
import { MainRouter } from '../Auth/routes/MainRouter';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/auth/*' element={ <LoginRouter /> } />
            <Route path='/*' element={ <MainRouter /> } />
        </Routes>
    </>
  )
}

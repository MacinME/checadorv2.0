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
            <Route path='/register/*' element={ <LoginRouter /> } />
            <Route path='/' element={ <MainRouter /> } />

            {/* <Route path='/*' element={ <LoginRouter /> } /> */}

        </Routes>
    </>
  )
}

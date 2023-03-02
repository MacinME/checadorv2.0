import {
    Routes,
    Route
} from 'react-router-dom'
import { MainRouter } from '../Auth/routes/MainRouter'


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='/*' element={ <MainRouter /> } />

        </Routes>
    </>
  )
}

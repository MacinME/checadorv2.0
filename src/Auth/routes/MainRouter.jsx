import { Route, Routes } from "react-router-dom"
import { MainHome } from "../pages/MainHome"

export const MainRouter = () => {
  return (
    <>
        <Routes >

            <Route path="users" element={ <MainHome page={ 1 } /> } />
            <Route path="registers-doc" element={ <MainHome page={ 2 } /> } />
            <Route path="registers-admon" element={ <MainHome page={ 3 } /> } />
            <Route path="formats" element={ <MainHome page={ 4 } /> } />

            <Route path="/*" element={ <MainHome page={ 1 } /> } />

        </Routes>
    </>
  )
}

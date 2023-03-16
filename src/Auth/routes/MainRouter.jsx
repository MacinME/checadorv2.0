import { Route, Routes } from "react-router-dom"
import { MainHome } from "../pages/MainHome"

export const MainRouter = () => {
  return (
    <>
        <Routes >

            <Route path="/" element={ <MainHome  /> } />

            <Route path="/*" element={ <MainHome  /> } />

        </Routes>
    </>
  )
}

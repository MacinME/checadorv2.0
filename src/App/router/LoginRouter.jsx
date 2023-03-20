import { Route, Routes } from "react-router-dom";
import { LoginClass } from "../pages/LoginClass"

export const LoginRouter = () => {
  return (
    <Routes >

        <Route path="/register/" element={ <LoginClass  /> } />

        <Route path="/*" element={ <LoginClass  /> } />

    </Routes>
  )
}

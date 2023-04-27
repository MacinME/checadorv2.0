import { Navigate, Route, Routes } from "react-router-dom";
import { LoginClass } from "../pages/LoginClass"
import { SingUp } from "../pages/SingUp";

export const LoginRouter = () => {
  return (
    <Routes >

       
        <Route path="/registrarse" element={ <SingUp /> } />
        <Route path="/login" element={ <LoginClass  /> } />

        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  )
}

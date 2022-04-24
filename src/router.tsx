import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<FormStep1/>} path="/"/> 
                <Route element={<FormStep2/>} path="/step2"/>
                <Route element={<FormStep3/>} path="/step3"/>
            </Routes>
        </BrowserRouter>
    );
};
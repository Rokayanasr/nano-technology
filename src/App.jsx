import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Consultancy from "./components/Consultancy";
import Aboutus from "./components/Aboutus";
import Service from "./components/Service";
import Contactus from "./components/Contactus";
import TechicalService from "./components/TechicalService";
import MarketingServices from "./components/MarketingServices";
import "./App.css";
import "./utils/i18n";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Hero />} />
                    <Route path='/consultancy' element={<Consultancy />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/service' element={<Service />}>
                        <Route index element={<TechicalService />} />
                        <Route path='/service/technical' element={<TechicalService />} />
                        <Route path='/service/marketing' element={<MarketingServices />} />
                    </Route>
                    <Route path='/contactus' element={<Contactus />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

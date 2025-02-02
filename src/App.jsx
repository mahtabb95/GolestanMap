import React from "react";
import PersistentDrawerRight from "./components/drawer/drawer";
import { Routes, Route } from 'react-router-dom';
import Excel from "./components/excel/excel";
import Order from "./components/order/Order";
import Home from "./components/home/Home";

export default function App(){
    return(
        <div>
            <Home />
            <PersistentDrawerRight />
            {/* <PersistentDrawerRight 
            content = {
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="/excel" element={<Excel />}></Route>
                    <Route path="/order" element={<Order />}></Route>
                </Routes>
            } 
            /> */}
        </div>
    )
}
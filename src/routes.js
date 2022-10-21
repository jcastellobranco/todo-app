import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home"; 
import Task from "./views/Task";

const Routers = () => {
   return(
       <Routes>
           <Route element = { <Home /> }  path="/" exact />
           <Route element = { <Task /> }  path="/task" />
       </Routes>
   )
}

export default Routers;
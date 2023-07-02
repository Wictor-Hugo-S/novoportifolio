import React from "react";

import { Route, Routes as ReactRouter } from 'react-router-dom'

import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

import Inicio from "../Pages/Inicio/inicio";
import SobreMim from "../Pages/SobreMim/SobreMim";
import Habilidades from "../Pages/Habilidades/habilidades";
import Trabalhos from "../Pages/Trabalhos/trabalhos";
import Contato from "../Pages/Contato/contato";


export default function Rotas (){

   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);


   return (

      <ReactRouter>
         <Route exact path='/' element={<Inicio />} />
         <Route path='/sobremim' element={<SobreMim />} />
         <Route path='/habilidades' element={<Habilidades/>}/>
         <Route path='/projetos' element={<Trabalhos/>}/>
         <Route path='/contato' element={<Contato/>}/>
      

      </ReactRouter>


   )
}

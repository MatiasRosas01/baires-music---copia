import React from "react";
import CartWidget from "../CartWidget";
import {ReactComponent as ReactLogo} from '../../img/Bairesvector.svg';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";



export default function NavBar() {
  return (
    <div className="colorNav">
    <a href="#"><ReactLogo /></a>
      <ul className="navList">
      <a href="#"><li>Nosotros</li></a>
      <a href="#"><li>Instrumentos</li></a> 
      <a href="#" className="buscar"><li>Buscar<FontAwesomeIcon icon={faMagnifyingGlass} /></li></a>  
        </ul>
      <div className="carrito">
        <CartWidget />
      </div>
    </div>
  );
}

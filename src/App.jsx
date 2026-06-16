import './App.css'
import Menu from './Menu';
import {useState} from "react";
import PanelControl from "./components/PanelControl/PanelControl";

export default function App() {
  const [section, setSection] = useState("panel");

 return (
  <div>
    <div>
      <img src="/Imagen 1.png" className="ImagenHome"></img>
    </div>
    <h1>Superordenador de Lyoko</h1>
    <Menu onSelect = {setSection}/>
    <br/>
    {section === "panel" && <PanelControl/>}
    {section === "torres" && <h2>Simulador de Torres</h2>}
    {section === "escaner" && <h2>Escáner</h2>}
    {section === "minijuego" && <h2>Mini-juego</h2>}
    {section === "mapa" && <h2>Mapa de Lyoko</h2>}
  </div>
 );
}


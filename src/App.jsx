import './App.css'
import Menu from './Menu';
import {useState} from "react";
import PanelControl from "./components/PanelControl/PanelControl";
import SimuladorTorres from "./components/SimuladorTorres/SimuladorTorres";


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
    {section === "torres" && <SimuladorTorres/>}
    {section === "escaner" && <h2>Escáner</h2>}
    {section === "minijuego" && <h2>Mini-juego</h2>}
    {section === "mapa" && <h2>Mapa de Lyoko</h2>}
  </div>
 );
}


import "./PanelControl.css";
import { useState } from "react";

export default function PanelControl() {
    const [torresActivas, setTorresActivas] = useState(0);
    const [alerta, setAlerta] = useState(false);
    const [logs, setLogs] = useState([]);

    const addLog = (msg) => {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    const activarTorre = () => {
        setTorresActivas(torresActivas + 1);
        addLog("Torre Activada");
    };

    const desactivarTorre = () => {
        if (torresActivas > 0) {
            setTorresActivas(torresActivas - 1);
            addLog("Torre Desactivada");
        }
    };

    const toggleAlerta = () => {
        setAlerta(!alerta);
        addLog(!alerta ? "ALERTA XANA" : "Alerta desactivada");
    };

    return (
        <>
            <div className="panel-control-container">
                <h2>Panel de Control</h2>


                <div className="panel-control-panel">
                    <p><strong>Torres activas: </strong>{torresActivas}</p>
                </div>
                <div className="panel-control-buttons">
                    <button onClick={activarTorre}>Activar Torre</button>
                    <button onClick={desactivarTorre}>Desactivar Torre</button>
                    <button onClick={toggleAlerta}>
                        {alerta ? "Desactivar alerta" : "Activar alerta XANA"}
                    </button>
                </div>
                <div className="panel-control-logs">
                    <h3>Registro de Eventos</h3>
                    <ul>
                        {logs.map((log, i) => (
                            <li key={i}>{log}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )


}
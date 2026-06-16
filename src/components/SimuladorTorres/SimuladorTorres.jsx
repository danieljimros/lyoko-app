import { useState } from "react";

function SimuladorTorres() {
  const [activa, setActiva] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const toggleTorre = () => {
    setActiva(!activa);
    addLog(!activa ? "Torre ACTIVADA" : "Torre DESACTIVADA");
  };

  return (
    <div style={styles.container}>
      <h2>Simulador de Torres</h2>

      <div style={styles.torreContainer}>
        <img
          src="/torre.png"
          alt="Torre de Lyoko"
          style={{
            ...styles.torre,
            animation: activa ? "auraRojaLyoko 2.5s infinite" : "auraAzulLyoko 3s infinite",
          }}
        />
      </div>

      <button style={styles.btn} onClick={toggleTorre}>
        {activa ? "Desactivar Torre" : "Activar Torre"}
      </button>

      <div style={styles.logs}>
        <h3>Registro</h3>
        <ul>
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    color: "#0ff",
    background: "#111",
    minHeight: "100vh",
  },
  torreContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  torre: {
    width: "380px",
    transition: "0.5s ease",
  },
  btn: {
    padding: "10px 20px",
    background: "#0ff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  logs: {
    border: "2px solid #0ff",
    padding: "15px",
    maxHeight: "200px",
    overflowY: "auto",
  },
};

export default SimuladorTorres;

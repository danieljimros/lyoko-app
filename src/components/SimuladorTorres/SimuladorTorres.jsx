import { useState } from "react";

function SimuladorTorres() {
  const [activa, setActiva] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const toggleTorre = () => {
    if (!activa) {
      setActiva(true);
      setMostrarAlerta(true);
      addLog("Torre ACTIVADA");
      return;
    }

    setActiva(false);
    setMostrarAlerta(false);
    addLog("Torre DESACTIVADA");
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

      {mostrarAlerta && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h3 style={styles.popupTitle}>¡ALERTA XANA!</h3>
            <img src="/XANA.png" alt="Torre de Lyoko en alerta" style={styles.popupImage} />
            <button style={styles.btn} onClick={() => setMostrarAlerta(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

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
    alignSelf: "center",
  },
  popupOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#111",
    border: "2px solid #f00",
    borderRadius: "12px",
    padding: "20px",
    width: "min(90vw, 460px)",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(255, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
  },
  popupTitle: {
    color: "#ff4d4d",
    margin: 0,
    letterSpacing: "1px",
  },
  popupImage: {
    width: "220px",
    maxWidth: "100%",
    filter: "drop-shadow(0 0 14px rgba(255, 0, 0, 0.9))",
  },
  logs: {
    border: "2px solid #0ff",
    padding: "15px",
    maxHeight: "200px",
    overflowY: "auto",
  },
};

export default SimuladorTorres;

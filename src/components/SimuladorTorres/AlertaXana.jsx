function AlertaXana({ onCerrar }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h3 style={styles.title}>¡ALERTA XANA!</h3>
        <img src="/XANA.png" alt="Torre de Lyoko en alerta" style={styles.image} />
        <button style={styles.btn} onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
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
  title: {
    color: "#ff4d4d",
    margin: 0,
    letterSpacing: "1px",
  },
  image: {
    width: "220px",
    maxWidth: "100%",
    filter: "drop-shadow(0 0 14px rgba(255, 0, 0, 0.9))",
  },
  btn: {
    padding: "10px 20px",
    background: "#0ff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    alignSelf: "center",
  },
};

export default AlertaXana;

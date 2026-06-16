
export default function Menu({ onSelect }) {
    return (
        <nav styles = {styles.menu}>
            <button styles = {styles.btn} onClick = {() => onSelect("panel")}>Panel de Control</button>
            <button styles = {styles.btn} onClick = {() => onSelect("torres")}>Simulador de Torres</button>
            <button styles = {styles.btn} onClick = {() => onSelect("escaner")}>Escáner</button>
            <button styles = {styles.btn} onClick = {() => onSelect("minijuego")}>Mini-juego</button>
            <button styles = {styles.btn} onClick = {() => onSelect("mapa")}>Mapa de Lyoko</button>
        </nav>
    );
}

const styles = {
    menu: {
        display: "flex",
        gap: "10px",
        padding: "10px",
        background: "#111",
        borderBottom: "2px solid #0ff",
    },
    btn: {
        background: "#0ff",
        border: "none",
        padding: "8px 12px",
        cursor: "pointer",
        fontWeight: "bold",
    }
};
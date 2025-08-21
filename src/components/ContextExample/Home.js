import { useContext } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Home = () => {
 const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyle = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
	<div style={pageStyle}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  )
}

export default Home;





 
import AppRouter from "./router/AppRouter";
import {darkTheme,lightTheme} from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light")

  const themeToogle =()=>{
    theme ==="light" ? setTheme("dark"): setTheme("light")
    // setTheme(!theme)
  }
  return (
    <ThemeProvider theme={theme==="light" ? lightTheme :darkTheme}>
      <AppRouter themeToogle={themeToogle}/>
    </ThemeProvider>
  );
}

export default App;

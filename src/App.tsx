import Portfolio from "./components/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <SpeedInsights />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;

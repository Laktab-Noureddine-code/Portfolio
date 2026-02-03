import Portfolio from "./components/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <SpeedInsights />
      <Analytics />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;

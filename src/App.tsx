import Portfolio from "./components/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <SpeedInsights />
      <Portfolio />
    </>
  );
}

export default App;
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Inventory from "./pages/Inventory";
import Mint from "./pages/Mint";
import Map from "./pages/Map";
import NoPage from "./pages/NoPage";
import Layout  from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Splash />} />
          <Route path="Mint" element={<Mint />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Map" element={<Map />} />
          <Route path="App" element={<App />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import ProductDetail from "./components/ProductDetail"
import Nosotros from "./pages/Nosotros"
import Contactos from "./pages/Contactos"
import { LanguageProvider } from "./context/LanguageContext"
import { useScrollBounceOnLoad } from "./hooks"


function App () {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
        <ScrollBounceRoute />
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </>
  )
}

// Aplica el rebote de scroll en cada cambio de ruta
function ScrollBounceRoute() {
  const location = useLocation();
  useScrollBounceOnLoad({ distance: 500, delayDown: 150, holdMs: 900, durationDown: 500, durationUp: 700, triggerKey: location.pathname });
  return null;
}

export default App

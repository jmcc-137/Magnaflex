import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import ProductDetail from "./components/ProductDetail"
import Nosotros from "./pages/Nosotros"
import Contactos from "./pages/Contactos"
import { LanguageProvider } from "./context/LanguageContext"


function App () {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
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

export default App

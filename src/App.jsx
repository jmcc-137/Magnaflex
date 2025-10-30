import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import Nosotros from "./pages/Nosotros"
import Contactos from "./pages/Contactos"


function App () {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

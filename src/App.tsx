import { BrowserRouter, Route, Routes } from "react-router"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import TechSpecs from "./Pages/TechSpecs"
import Compare from "./Pages/Compare"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/tech-specs" element={<TechSpecs/>} />
          <Route path="/compare" element={<Compare/>} />
        </Routes>

        {/* FOOTER  */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

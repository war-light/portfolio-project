// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/Layout"
import Home from "../components/pages/Home/Home"
import About from "../components/pages/About"
import ContactMe from "../components/pages/ContactMe"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

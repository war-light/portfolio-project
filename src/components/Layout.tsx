// src/components/Layout.jsx
import { Outlet } from "react-router"
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"

const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Outlet /> {/* Aquí se renderizan las páginas */}
        </main>
      </div>
    </>
  )
}

export default Layout

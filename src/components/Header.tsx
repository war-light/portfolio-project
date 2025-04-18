// src/components/Header.jsx
import { Link } from "react-router"
import { SunIcon } from "@heroicons/react/16/solid"

const Header = () => {
  return (
    <header className="grid grid-flow-col bg-neutral-800 p-4 px-9 lg:px-56">
      <nav className="grid grid-flow-col w-fit gap-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/curriculum">Curriculum</Link>
      </nav>
      <div className="ml-auto">
        <SunIcon className="w-6 h-6 text-white" />
      </div>
    </header>
  )
}

export default Header

import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
//   { label: 'Categories', to: '/products' },
//   { label: 'Research', to: '/research' },
//   { label: 'Clinical Use', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-green-800 font-bold text-xl">
          <span className="h-8 w-8 rounded-full bg-mapple-500/80 flex items-center justify-center text-white">M</span>
          MAPPL Clinical
        </Link>

        <button className="md:hidden p-2 rounded-md border border-green-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="sr-only">Toggle menu</span>
          {open ? '✕' : '☰'}
        </button>

        <nav className={`absolute inset-x-0 top-full md:static md:block overflow-hidden md:overflow-visible bg-white md:bg-transparent ${open ? 'h-auto' : 'h-0'}`}>
          <ul className="md:flex gap-2 p-4 md:p-0">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-mapple-100 text-mapple-700' : 'text-gray-700 hover:bg-mapple-50'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

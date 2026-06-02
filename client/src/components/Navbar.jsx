import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, User } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))

  const cartItems = 0 // TODO: Get from context/state
  const userName = localStorage.getItem('userName')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AT</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AmazingTycho</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition">
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-primary transition cursor-pointer" size={24} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-primary transition">
                  <User size={20} />
                  <span>{userName}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-primary transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-primary transition">
                  Login
                </Link>
                <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">
              Home
            </Link>
            <Link to="/products" className="block px-3 py-2 rounded hover:bg-gray-100">
              Products
            </Link>
            <Link to="/cart" className="block px-3 py-2 rounded hover:bg-gray-100">
              Cart ({cartItems})
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="block px-3 py-2 rounded hover:bg-gray-100">
                  Profile ({userName})
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 rounded hover:bg-gray-100">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 rounded hover:bg-gray-100 text-primary font-semibold">
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

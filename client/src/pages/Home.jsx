import { Link } from 'react-router-dom'
import { Zap, ShoppingBag, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Amazing 3D Creations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Discover unique, handcrafted 3D-printed pieces for your home
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <Zap className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">
                Precision-engineered 3D prints using premium materials for superior quality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <ShoppingBag className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
              <p className="text-gray-600">
                Get your unique ideas brought to life with our custom 3D printing service.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <Truck className="mx-auto text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery to your door with secure packaging and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600">3D Model {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Beautiful 3D-printed creation with premium quality finish.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">$49.99</span>
                    <Link
                      to="/products"
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition text-sm font-medium"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Jivuma</h3>
            <p className="text-gray-400">
              Discover authentic Indian flavors with our premium spice blends and ready-to-cook masalas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2024 Jivuma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
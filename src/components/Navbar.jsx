const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <img
                src="https://www.shutterstock.com/image-vector/smartphone-mobile-payment-logo-design-260nw-1766674556.jpg"
                alt="Paytm logo"
                className="h-16 w-18"
              />
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="ml-3">
              <div className="flex space-x-4">
                <button
                  onClick={() => window.location.href = '/signup'}
                  className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out bg-blue-100 py-2 px-4 rounded-md"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => window.location.href = '/signin'}
                  className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out bg-gray-100 py-2 px-4 rounded-md"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

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

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              Google Pay - India's Leading Digital Payments Brand
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8">
              Google Pay is India's leading digital payments brand, with over 350
              million registered users and 15 million offline merchants. We offer
              a wide range of financial services, including mobile recharges,
              bill payments, money transfers, and online shopping.
            </p>
            <button className="btn btn--primary border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition duration-150 ease-in-out py-2 px-4 rounded-md">
              Get Started
            </button>

          </div>
          <div className="flex-1 lg:w-1/2">
            <img
              src="src\assets\paytm2.jpg"
              alt="Paytm banner"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Mobile Recharges</h2>
            <p className="text-gray-600">
              Recharge your mobile, DTH, and data cards with Paytm. Get instant
              recharges at the lowest prices.
            </p>
            <button className="btn btn--secondary mt-4">Recharge Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Bill Payments</h2>
            <p className="text-gray-600">
              Pay your bills with Paytm. We offer a wide range of bill payment
              options, including electricity, water, gas, and broadband bills.
            </p>
            <button className="btn btn--secondary mt-4">Pay Bills</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Money Transfers</h2>
            <p className="text-gray-600">
              Transfer money to any bank account with Paytm. Our money transfer
              service is fast, secure, and easy to use.
            </p>
            <button className="btn btn--secondary mt-4">Transfer Money</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Online Shopping</h2>
            <p className="text-gray-600">
              Shop for your favorite products with Paytm. We offer a wide range of
              products, including mobile phones, laptops, TVs, and more.
            </p>
            <button className="btn btn--secondary mt-4">Shop Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Loans and Credit Cards</h2>
            <p className="text-gray-600">
              Apply for personal loans, home loans, and credit cards with Paytm.
              Get instant approvals and low-interest rates.
            </p>
            <button className="btn btn--secondary mt-4">Apply Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Paytm Mall</h2>
            <p className="text-gray-600">
              Shop for your favorite products with Paytm Mall. We offer a wide range
              of products, including mobile phones, laptops, TVs, and more.
            </p>
            <button className="btn btn--secondary mt-4">Shop Now</button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Online Transactions?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Secure Payments
                  </h3>
                  <p className="text-base text-gray-500">
                    Paytm uses the latest security technologies to ensure that
                    your payments are safe and secure.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-4 sm:mt-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v10"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Instant Refunds
                  </h3>
                  <p className="text-base text-gray-500">
                    Paytm offers instant refunds for all failed transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-4 sm:mt-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2.16L8 10.94 4.84 8.88a2 2 0 01-.09-.71 2 2 0 011.71-.09L16 10.94 19.16 8.88a2 2 0 01.09-.71 2 2 0 011.71.09L12 6zm-4 6a1 1 0 01-.25.54 1 1 0 01-.25.54 1 1 0 01-.54.25 1 1 0 01-1.44-.54 1 1 0 01-.54-1.44 1 1 0 01.54-1.44 1 1 0 011.44-.54 1 1 0 01.54.25 1 1 0 01.54.54z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    24/7 Customer Support
                  </h3>
                  <p className="text-base text-gray-500">
                    Paytm offers 24/7 customer support through chat, email, and
                    phone.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Rewards and Offers
                  </h3>
                  <p className="text-base text-gray-500">
                    Get exclusive rewards and offers when you use Paytm.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 01-2-2h-3m14 0h-3m-2 2 4 4m-4-4v10a1 1 0 001 1h14a1 1 0 001-1V8m-7 4
                    a3 3 0 01-3-3h1m3 3v4M3 3l3-3m0 0l-3 3m3 0h14"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Easy and Convenient
                  </h3>
                  <p className="text-base text-gray-500">
                    Paytm is easy and convenient to use. You can pay your bills,
                    recharge your mobile, and shop online with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Wide Range of Services
                  </h3>
                  <p className="text-base text-gray-500">
                    Paytm offers a wide range of services, including mobile
                    recharges, bill payments, money transfers, and online
                    shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="flex-1 lg:w-1/3">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  About Paytm
                </h3>
                <p className="text-gray-300">
                  Google Pay is India's leading digital payments brand, with over 350
                  million registered users and 15 million offline merchants. We
                  offer a wide range of financial services, including mobile
                  recharges, bill payments, money transfers, and online shopping.
                </p>
                <p className="text-gray-300">
                  Contact Us: <a href="mailto:support@paytm.com" className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">support@paytm.com</a>
                </p>
                <p className="text-gray-300">
                  Call Us: <a href="tel:+91-1234567890" className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">+91-1234567890</a>
                </p>
              </div>
              <div className="flex-1 lg:w-1/3">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Our Services
                </h3>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Mobile Recharges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Bill Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Money Transfers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Online Shopping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Loans and Credit Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Paytm Mall
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 lg:w-1/3">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Follow Us
                </h3>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <a
                      href="https://www.facebook.com/paytm"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/paytm"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/paytm"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/paytm"
                      className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              Copyright ©2024 Google Pay. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
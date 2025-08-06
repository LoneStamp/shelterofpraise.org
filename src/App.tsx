import React, { useState } from 'react'
import { Facebook, Youtube, Instagram, Music, Mail, Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const LayoutComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CSS Custom Properties (Root Variables)
  const rootStyles = `
    :root {
      /* Typography */
      --font-main: 'Poppins', sans-serif;
      --font-size-h1: 2.75rem;
      --font-size-h2: 2.25rem;
      --font-size-h3: 1.75rem;
      --font-size-h4: 1.25rem;
      --font-size-p: 1rem;
      --font-size-span: 0.875rem;
      --font-size-caption: 0.75rem;

      --font-weight-black: 900;
      --font-weight-bold: 700;
      --font-weight-medium: 500;
      --font-weight-regular: 400;
      --font-weight-light: 300;

      /* Color Palette */
      --color-black: #000000;
      --color-black-90: #1a1a1a;
      --color-black-80: #333333;
      --color-black-60: #666666;
      --color-black-40: #999999;
      --color-black-20: #cccccc;

      --color-white: #ffffff;
      --color-gray: #f5f5f5;

      /* Backgrounds */
      --bg-main: var(--color-white);
      --bg-main-box: #f0f0f0;
      --bg-top-layer: var(--color-gray);

      /* Shadow */
      --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    body {
      font-family: var(--font-main);
      background: var(--bg-main);
      margin: 0;
      padding: 0;
    }

    .custom-h1 {
      font-size: var(--font-size-h1);
      font-weight: var(--font-weight-black);
      color: var(--color-black);
      line-height: 1.2;
    }

    .custom-h2 {
      font-size: var(--font-size-h2);
      font-weight: var(--font-weight-bold);
      color: var(--color-black);
      line-height: 1.3;
    }

    .custom-h3 {
      font-size: var(--font-size-h3);
      font-weight: var(--font-weight-medium);
      color: var(--color-black);
      line-height: 1.4;
    }

    .custom-h4 {
      font-size: var(--font-size-h4);
      font-weight: var(--font-weight-regular);
      color: var(--color-black);
      line-height: 1.4;
    }

    .custom-p {
      font-size: var(--font-size-p);
      font-weight: var(--font-weight-regular);
      color: var(--color-black);
      line-height: 1.6;
    }

    .custom-span {
      font-size: var(--font-size-span);
      font-weight: var(--font-weight-regular);
      color: var(--color-black-60);
    }

    .custom-caption {
      font-size: var(--font-size-caption);
      font-weight: var(--font-weight-light);
      color: var(--color-black-40);
    }

    .custom-box {
      background: var(--bg-main-box);
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: var(--box-shadow);
    }

    .custom-button {
      background: var(--color-black-90);
      color: var(--color-white);
      font-weight: var(--font-weight-bold);
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .custom-button:hover {
      background: var(--color-black);
      transform: translateY(-2px);
      box-shadow: var(--box-shadow);
    }

    @media (max-width: 768px) {
      .custom-h1 { font-size: 2rem; }
      .custom-h2 { font-size: 1.75rem; }
      .custom-h3 { font-size: 1.5rem; }
    }
  `;

  const navigationItems = [
    'About Us', 'Ministry', 'Projects', 'Gallery', 'Blog', 
    'Testimonials', 'Serve', 'Outreach', 'Memorial Tribute', 
    'CCC Family', 'Upcoming Events', 'Giving', 'Visit Us', 'Privacy Policy'
  ];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <style>{rootStyles}</style>
      <div className="min-h-screen bg-white">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                {/* Logo Image Placeholder */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Logo Text */}
                <div className="hidden md:block">
                  <h1 className="custom-h4 mb-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Assembly of God
                  </h1>
                  <p className="custom-caption text-gray-600 -mt-1">
                    Shelter of Praise
                  </p>
                </div>

                {/* Mobile Logo Text */}
                <div className="md:hidden">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Assembly of God
                  </h1>
                  <p className="text-xs text-gray-600 -mt-1">
                    Shelter of Praise
                  </p>
                </div>
              </div>

              {/* Desktop Navigation Tabs */}
              <nav className="hidden lg:flex items-center space-x-1">
                {/* Home Tab - Special styling since it's the current page in this context */}
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Home
                </a>
                
                {/* Other Navigation Tabs */}
                {navigationItems.slice(0, 7).map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                
                {/* More Dropdown */}
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200">
                    More 
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-1">
                    <div className="py-2">
                      {navigationItems.slice(7).map((item, index) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-black transition-all duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
                <div className="flex flex-col space-y-1">
                  {/* Home Tab for Mobile */}
                  <a
                    href="#"
                    className="px-3 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md mx-2"
                  >
                    Home
                  </a>
                  
                  {/* Other Navigation Items for Mobile */}
                  {navigationItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md mx-2 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content Area - This is where pages will be rendered */}
        <main id="main" className="flex-1 min-h-[60vh]">
          {/* This section would be replaced with actual page content */}
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="custom-h2 text-gray-400 mb-4">Page Content Goes Here</h2>
              <p className="custom-p text-gray-500">
                This layout component provides the header navigation and footer. 
                The main content would be injected here by your routing system.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              
              {/* 1. Church Info */}
              <div className="space-y-4">
                <h4 className="custom-h4 text-white mb-6">Church Info</h4>
                <div className="space-y-4">
                  <p className="custom-p text-gray-300 font-medium">
                    Shelter of Praise Assembly of God
                  </p>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="custom-span text-gray-300">
                      Brgy. XYZ, Cagayan de Oro,<br />
                      Northern Mindanao, Philippines
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="custom-span text-gray-300">(+63) 912 345 6789</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <p className="custom-span text-gray-300">info@shelterofpraise.org</p>
                  </div>
                </div>
              </div>

              {/* 2. Social Media Icons */}
              <div>
                <h4 className="custom-h4 text-white mb-6">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Music className="w-6 h-6" />
                  </a>
                </div>
                <p className="custom-caption text-gray-400 mt-4">
                  Stay connected with our community and join our online fellowship.
                </p>
              </div>

              {/* 3. Newsletter Signup */}
              <div>
                <h4 className="custom-h4 text-white mb-6">Newsletter</h4>
                <p className="custom-span text-gray-300 mb-4">
                  Get updates, devotionals, events, and church news delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 custom-span border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                  />
                  <button className="custom-button w-full hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* 4. Bible Verse / Motto */}
              <div>
                <h4 className="custom-h4 text-white mb-6">Our Foundation</h4>
                <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border-l-4 border-blue-400 shadow-lg">
                  <div className="flex items-start space-x-2 mb-3">
                    <span className="text-2xl">🕊️</span>
                    <div>
                      <p className="custom-span text-gray-200 italic leading-relaxed">
                        "As for me and my house, we will serve the Lord."
                      </p>
                      <p className="custom-caption text-blue-300 mt-2 font-medium">
                        — Joshua 24:15
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Copyright & Legal */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="custom-span text-gray-400">
                  © 2025 Shelter of Praise Assembly of God - All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-6">
                  <a 
                    href="#" 
                    className="custom-span text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    Terms & Conditions
                  </a>
                  <span className="custom-span text-gray-600">|</span>
                  <a 
                    href="#" 
                    className="custom-span text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App

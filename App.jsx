import { useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        <header className="flex justify-between items-center p-6 shadow-md">
          <h1 className="text-2xl font-bold">SoftSell</h1>
          <button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-700 rounded px-4 py-1">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
        <footer className="text-center py-6 text-sm">© 2025 SoftSell. All rights reserved.</footer>
      </div>
    </div>
  );
}

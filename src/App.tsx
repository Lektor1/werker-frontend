import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Shop } from './components/Shop';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShopPage } from './pages/ShopPage';
function HomePage() {
  return (
    <div className="w-full min-h-screen bg-brandWhite font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>);

}
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>);

}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PricingPlans from './components/PricingPlans';
import GlobalMap from './components/GlobalMap';
import Testimonials from './components/Testimonials';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PricingPlans />
        <GlobalMap />
        <Testimonials />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/features" element={<div className="p-10 text-center"><h1 className="text-3xl">Features Page</h1><p>This page is under construction</p></div>} />
          <Route path="/pricing" element={<div className="p-10 text-center"><h1 className="text-3xl">Pricing Page</h1><p>This page is under construction</p></div>} />
          <Route path="/testimonials" element={<div className="p-10 text-center"><h1 className="text-3xl">Testimonials Page</h1><p>This page is under construction</p></div>} />
          <Route path="/help" element={<div className="p-10 text-center"><h1 className="text-3xl">Help Page</h1><p>This page is under construction</p></div>} />
          <Route path="*" element={<div className="p-10 text-center"><h1 className="text-3xl">404 - Page Not Found</h1></div>} />
        </Routes>
      </Router>
    </div>
  );
}

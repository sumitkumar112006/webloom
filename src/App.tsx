import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ThreeDWorksPage } from './pages/ThreeDWorksPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { VideoShowcasePage } from './pages/VideoShowcasePage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Web Services');

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setIsContactModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] text-[#111827] dark:text-[#F3F4F6] font-sans antialiased selection:bg-[#23469F] selection:text-white transition-colors duration-200">
      <ScrollToTop />
      
      {/* Sticky Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServicePage onOpenContact={handleOpenContact} />} />
          <Route path="/3d-works" element={<ThreeDWorksPage onOpenContact={handleOpenContact} />} />
          <Route path="/social-media" element={<SocialMediaPage onOpenContact={handleOpenContact} />} />
          <Route path="/ai-automation" element={<AIAutomationPage onOpenContact={handleOpenContact} />} />
          <Route path="/our-work" element={<PortfolioPage />} />
          <Route path="/our-work/:id" element={<ProjectDetailPage onOpenContact={handleOpenContact} />} />
          <Route path="/video-showcase" element={<VideoShowcasePage onOpenContact={handleOpenContact} />} />
          <Route path="/showreel" element={<VideoShowcasePage onOpenContact={handleOpenContact} />} />
          <Route path="/pricing" element={<PricingPage onOpenContact={handleOpenContact} />} />
          <Route path="/about" element={<AboutPage onOpenContact={handleOpenContact} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage onOpenContact={handleOpenContact} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
};

export default App;


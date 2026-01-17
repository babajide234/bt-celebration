import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Reflections from './components/Reflections';
import Milestones from './components/Milestones';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        onScrollToSection={scrollToSection}
        onSignGuestbook={() => setIsModalOpen(true)}
      />

      <Hero
        onScrollToSection={scrollToSection}
        onSignGuestbook={() => setIsModalOpen(true)}
      />

      <Reflections />

      <Milestones />

      <Gallery />

      <Guestbook
        isModalOpen={isModalOpen}
        onOpenModal={() => setIsModalOpen(true)}
        onCloseModal={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default App;

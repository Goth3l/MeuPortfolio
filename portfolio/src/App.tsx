import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Infor from './components/Infor';
import Logo from './assets/images/Logo.png';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [slideDirection, setSlideDirection] = useState('');

  // Ordem das páginas para determinar a direção do slide
  const pageOrder = ['home', 'infor', 'work', 'contact'];

  const handlePageChange = (newPage: string) => {
    if (newPage !== currentPage) {
      const currentIndex = pageOrder.indexOf(currentPage);
      const newIndex = pageOrder.indexOf(newPage);
      // Define a direção do slide
      setSlideDirection(newIndex > currentIndex ? 'left' : 'right');
      // Aguarda a animação terminar antes de trocar a página
      setTimeout(() => {
        setCurrentPage(newPage);
        setSlideDirection(''); // Reseta a direção após a animação
      }, 500);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'infor':
        return <Infor />;
      case 'home':
        return <Home />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <Navbar setCurrentPage={handlePageChange} />
      </header>
      <main className="main-content">
        <div className={`page-container ${slideDirection}`}>
          <div className="page-wrapper">{renderPage()}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
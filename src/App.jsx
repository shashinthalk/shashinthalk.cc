
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AppRouter from './routes/AppRoutes';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import FAQChat from './components/ui/FAQChat';

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);
  
  return (
    <div className="App">
      <HashRouter>
          <Header/>
          <AppRouter/>
          <Footer/>
          <FAQChat/>
      </HashRouter>
    </div>
  );
}

export default App;

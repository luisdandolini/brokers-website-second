import styles from '../styles/HeaderSecond.module.css';
import Logo from '../assets/logosort.png';
import SearchSecond from './SearchSecond';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 758);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

  return(
    <section className={`${isMobile ? styles.none : ''}`}>
      <div className={styles.bg}>
        <div className={styles.bg_logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.title}>
          <h1>Encontre aqui os melhores imóveis da cidade</h1>
        </div>
      </div>
      <SearchSecond />
    </section>
  )
}

export default Header
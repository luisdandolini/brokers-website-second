import styles from '../styles/AboutSecond.module.css';
import Leo from '../assets/leo.jpeg';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutSecondMobile from './AboutSecondMobile';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <AboutSecondMobile />;
  }

  return(
    <section className={styles.bg}>
      <div className={styles.about}>
        <img src={Leo} alt="" />
        <div className={styles.about_text}>
          <p className={styles.title}>Sobre nós</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptatum animi recusandae consequatur esse velit totam! Veniam,
            fugit laboriosam esse, vero, autem libero id quo nostrum rem ut voluptate asperiores?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptatum animi recusandae consequatur esse velit totam! Veniam,
            fugit laboriosam esse, vero, autem libero id quo nostrum rem ut voluptate asperiores?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
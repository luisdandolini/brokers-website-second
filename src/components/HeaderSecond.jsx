import styles from '../styles/HeaderSecond.module.css';
import Logo from '../assets/logosort.png';

const Header = () => {
  return(
    <section>
      <div className={styles.bg}>
        <div className={styles.bg_logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.title}>
          <h1>Encontre aqui os melhores imóveis da cidade</h1>
        </div>
      </div>
    </section>
  )
}

export default Header
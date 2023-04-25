import styles from '../styles/AboutSecondMobile.module.css';
import Leo from '../assets/leo.jpeg';

const AboutSecondMobile = () => {
  return(
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.about}> 
          <img src={Leo} alt="" />
          <p>Sobre nós</p>
        </div>    
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui animi numquam repudiandae nesciunt. Tempore, veritatis provident iste voluptates magni, repellat inventore be
            atae, vero earum quis minima laudantium quae nesciunt cumque!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui animi numquam repudiandae nesciunt. Tempore, veritatis provident iste voluptates magni, repellat inventore be
            atae, vero earum quis minima laudantium quae nesciunt cumque!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSecondMobile
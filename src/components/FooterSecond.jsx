import styles from '../styles/FooterSecond.module.css';
import Logo from '../assets/logo_fast_nova_cor.png';
import LogoFast from '../assets/Fast Sale Horizontal.png';
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook } from '@mdi/js';


const FooterSecond = () => {
  return(
    <footer>
      <div className={styles.bg}>
        <div className={styles.container_info}>
          <img src={Logo} alt=""  className={styles.logo}/>
          <div className={styles.info}>
            <p>(47) 00000-0000</p>
            <p className={styles.address}>Av.Sete de Setembro</p>
            <p>Nr 480 - Centro</p>
            <p>Balneário Camboriú-SC</p>
            <div className={styles.nets}>
              <Icon path={mdiFacebook} size={1} />
              <Icon path={mdiInstagram} size={1} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fast}>
        <p>Desenvolvido por: </p>
        <img src={LogoFast} alt="" className={styles.logo_fast} />
      </div>
    </footer>
  )
}

export default FooterSecond
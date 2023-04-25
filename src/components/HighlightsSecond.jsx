import styles from '../styles/HighlightsSecond.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchSecondMobile from './SearchSecondMobile';
import HeaderSecond from './HeaderSecond';
import Icon from '@mdi/react';
import { mdiBedKingOutline, mdiCarBack, mdiRulerSquare } from '@mdi/js';

const HighlightsSecond = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
 
  return(
    <section>
      {isMobile ? <SearchSecondMobile /> : <HeaderSecond /> }

      <h1 className={styles.title}>Destaques</h1>

      <div className={styles.container_carousel}>
        <Swiper 
          slidesPerView={3}
          spaceBetween={0}
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            759: {
              slidesPerView: 3
            }
          }}>
          <SwiperSlide>
            <div className={styles.container}>
              <div className={styles.immobile}>
                <div className={styles.bg}></div>
                <div className={styles.immobile_config}>
                  <p className={styles.immobile_name}>Apartamento Falcon Tower no centro de Balneário Camboriú com 3 suítes</p>
                  <div className={styles.immobile_options}>
                    <span className={styles.container_icons}><Icon path={mdiBedKingOutline} size={.9} /> 3 suítes</span>
                    <span className={styles.container_icons}><Icon path={mdiCarBack} size={.9} /> 3 vagas</span>
                    <span className={styles.container_icons}><Icon path={mdiRulerSquare} size={.9} /> 152m</span>
                  </div>
                  <div>
                    <span className={styles.immobile_price}>R$4.000.000,00</span>
                  </div>
                  <div className={styles.immobile_view}>
                    <div className={styles.details}></div>
                    <p>Ver imóvel</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.container}>
              <div className={styles.immobile}>
                <div className={styles.bg}></div>
                <div className={styles.immobile_config}>
                  <p className={styles.immobile_name}>Apartamento Falcon Tower no centro de Balneário Camboriú com 3 suítes</p>
                  <div className={styles.immobile_options}>
                    <span className={styles.container_icons}><Icon path={mdiBedKingOutline} size={.9} /> 3 suítes</span>
                    <span className={styles.container_icons}><Icon path={mdiCarBack} size={.9} /> 3 vagas</span>
                    <span className={styles.container_icons}><Icon path={mdiRulerSquare} size={.9} /> 152m</span>
                  </div>
                  <div>
                    <span className={styles.immobile_price}>R$4.000.000,00</span>
                  </div>
                  <div className={styles.immobile_view}>
                    <div className={styles.details}></div>
                    <p>Ver imóvel</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <div className={styles.immobile}>
                <div className={styles.bg}></div>
                <div className={styles.immobile_config}>
                  <p className={styles.immobile_name}>Apartamento Falcon Tower no centro de Balneário Camboriú com 3 suítes</p>
                  <div className={styles.immobile_options}>
                    <span className={styles.container_icons}><Icon path={mdiBedKingOutline} size={.9} /> 3 suítes</span>
                    <span className={styles.container_icons}><Icon path={mdiCarBack} size={.9} /> 3 vagas</span>
                    <span className={styles.container_icons}><Icon path={mdiRulerSquare} size={.9} /> 152m</span>
                  </div>
                  <div>
                    <span className={styles.immobile_price}>R$4.000.000,00</span>
                  </div>
                  <div className={styles.immobile_view}>
                    <div className={styles.details}></div>
                    <p>Ver imóvel</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <div className={styles.immobile}>
                <div className={styles.bg}></div>
                <div className={styles.immobile_config}>
                  <p className={styles.immobile_name}>Apartamento Falcon Tower no centro de Balneário Camboriú com 3 suítes</p>
                  <div className={styles.immobile_options}>
                    <span className={styles.container_icons}><Icon path={mdiBedKingOutline} size={.9} /> 3 suítes</span>
                    <span className={styles.container_icons}><Icon path={mdiCarBack} size={.9} /> 3 vagas</span>
                    <span className={styles.container_icons}><Icon path={mdiRulerSquare} size={.9} /> 152m</span>
                  </div>
                  <div>
                    <span className={styles.immobile_price}>R$4.000.000,00</span>
                  </div>
                  <div className={styles.immobile_view}>
                    <div className={styles.details}></div>
                    <p>Ver imóvel</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.container_button}>
          <button>Ver todos os imóveis</button>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSecond;
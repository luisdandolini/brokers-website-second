import styles from '../styles/HighlightsSecond.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

const HighlightsSecond = () => {
  return(
    <section>
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
                    <span>3 suítes</span>
                    <span>3 vagas</span>
                    <span>152m</span>
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
                    <span>3 suítes</span>
                    <span>3 vagas</span>
                    <span>152m</span>
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
                    <span>3 suítes</span>
                    <span>3 vagas</span>
                    <span>152m</span>
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
                    <span>3 suítes</span>
                    <span>3 vagas</span>
                    <span>152m</span>
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
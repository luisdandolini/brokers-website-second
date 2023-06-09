import styles from '../styles/ImobileSecond.module.css'
import Teste from '../assets/teste.jpg';
import Icon from '@mdi/react';
import { mdiBedKingOutline, mdiCarBack, mdiRulerSquare, mdiShare } from '@mdi/js';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import ImobileSecondMobile from './ImobileSecondMobile';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const ImobileSecond = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <ImobileSecondMobile />;
  }

  return(
    <section>
      <div className={styles.container_imgs}>
        <img src={Teste} alt="" />
        <img src={Teste} alt="" />
        <img src={Teste} alt="" />
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_config}>
          <p>Casa de alto padrão no condomínio Caledônia em Camboriú</p>
          <div className={styles.container_imobile}>
            <div>
              <p className={styles.config_icon}><Icon path={mdiBedKingOutline} size={.9} /> 3 suítes</p>
              <p className={styles.config_icon}><Icon path={mdiCarBack} size={.9} />2 vagas</p>
              <p className={styles.config_icon}><Icon path={mdiRulerSquare} size={.9} />127 m</p>
            </div>
            <div>
              <p>Camboriú</p>
            </div>
          </div>
          <div>
            <p className={styles.price}>R$4.000.000,00</p>
          </div>
          <div className={styles.iptu}>
            <p>Condomínio: R$1.100,00</p>
            <p>IPTU: R$2.000,00</p>
          </div>
          <div>
            <p className={styles.imobile}>Sobre o imóvel</p>

            <div>
              <p>- 3 Suítes (Sendo uma Master com Hidro)</p>
              <p>- 3 Banheiros</p>
              <p>- Lavabo</p>
              <p>- Churrasqueira</p>
              <p>- Área de Serviço</p>
              <p>- Living</p>
              <p>- Sala de Jantar</p>
              <p>- Sala de Jantar</p>
              <p>- Cozinha</p>
              <p>- Sacada Integrada</p>

              <p className={styles.characteristics}>Características do Empreendimento</p>

              <p>- Acessibilidade para Cadeirantes</p>
              <p>- Acessibilidade para Cadeirantes</p>
              <p>- Acessibilidade para Cadeirantes</p>
              <p>- Acessibilidade para Cadeirantes</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>MAPA</p>
          </div>
          <div>
            <button className={styles.information}>Quero mais informações</button>
          </div>
          <div>
            <button className={styles.share}>Compartilhe <Icon path={mdiShare} size={1} /></button>
          </div>
        </div>
      </div>

      <div>
        <h2 className={styles.title_imobiles}>Imóveis semelhantes a este</h2>
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
        </div>
      </div>
    </section>
  )
}

export default ImobileSecond;
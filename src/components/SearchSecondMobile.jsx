import styles from '../styles/SearchSecondMobile.module.css';
import Accordion from './Accordion';
import Icon from '@mdi/react';
import { mdiHomeCity, mdiBedKingOutline, mdiCurrencyUsd, mdiMagnify, mdiCarBack } from '@mdi/js';
import { useState, useEffect } from 'react';
import Logo from '../assets/logosort.png';

export default function SearchSecondMobile() {
  const [index, setIndex] = useState(0);
  const words = ['Digite o nome do empreendimento', 'Buscar por código do imóvel'];
  const [typing, setTyping] = useState(false);

  const handleTyping = (e) => {
    if (e.target.value === '') {
      setTyping(false);
    } else {
      setTyping(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  const customAccordion = {
    paddingTop: '0rem',
    paddingRight: '0rem',
    marginBottom: '0rem',
    marginTop: '-15px',
    color: '#0000008a',
    fontWeight: '600'
  };

  const customAccordionHeader = {
    padding: '.3rem .8rem .8rem 3rem',
    fontSize: '.9rem'
  }

  const customAccordionContent = {
    border: 'none',
    borderBottom: '1px solid #0000008a'
  }

  return(
    <div className={styles.bg}>
      <div className={styles.bg_logo}>
        <img src={Logo} alt="" />
      </div>
      <span className={styles.icon_location}>
        <Icon path={mdiHomeCity} size={.9} color={'#1919bf'}/>
      </span>
      <Accordion 
        title='Categoria' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="apartamento" /> 
              <label htmlFor='apartamento' className="check-box" />
              <span id='apartamento'>Apartamento</span> 
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="casa" /> 
              <label htmlFor='casa' className="check-box" />
              Casa
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="comercial" /> 
              <label htmlFor="comercial" className="check-box" />
              Comercial
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="outros" /> 
              <label htmlFor="outros" className="check-box" />
              Outros 
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <span className={styles.icon_firstArrow}>
        <Icon path={mdiCarBack} size={1} color={'#1919bf'}/>
      </span>
      <Accordion title='Vagas' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="one" /> 
              <label htmlFor="one" className="check-box" />
              1 vaga
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="two" /> 
              <label htmlFor="two" className="check-box" />
              2 vagas
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="three" /> 
              <label htmlFor="three" className="check-box" />
              3 vagas
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="four" /> 
              <label htmlFor="four" className="check-box" />
              4 vagas
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="five" /> 
              <label htmlFor="five" className="check-box" />
              5+ vagas
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <span className={styles.icon_secondArrow}>
        <Icon path={mdiBedKingOutline} size={1} color={'#1919bf'} />
      </span>
      <Accordion title='Quartos' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="one" /> 
              <label htmlFor="one" className="check-box" />
              1 quarto
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="two" /> 
              <label htmlFor="two" className="check-box" />
              2
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="three" /> 
              <label htmlFor="three" className="check-box" />
              3 quartos
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="four" /> 
              <label htmlFor="four" className="check-box" />
              4 quartos
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="five" /> 
              <label htmlFor="five" className="check-box" />
              5+ quartos 
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <div 
        style={{borderBottom: '1px solid #000', marginTop: '.5rem'}}
        className={`${styles.input_text} ${styles.text_container_two}`}>
          <Icon path={mdiCurrencyUsd} size={.9} color={'#1919bf'} className={styles.lupa}/>
          <input
              className={styles.input_value_option}
              type="text"
              placeholder="Valor máximo"
          />
      </div>
      <div className={`${styles.input_text} ${styles.text_container}`}>
        <Icon path={mdiMagnify} size={1} color={'#1919bf'} className={styles.lupa}/>
        <input
            className={`${styles.text_animation} ${typing ? styles.pause_animation : ''}`}
            type="text"
            placeholder={words[index]}
            onChange={handleTyping}
        />
      </div>
      <div className={styles.container_button}>
        <button className={styles.button}>
          Buscar
        </button>
      </div>
    </div>
  )
}
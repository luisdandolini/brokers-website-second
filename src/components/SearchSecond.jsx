import styles from '../styles/SearchSecond.module.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Icon from '@mdi/react';
import { mdiHomeCity, mdiCarBack, mdiBedKingOutline } from '@mdi/js';
import { mdiCurrencyUsd } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import SearchSecondMobile from './SearchSecondMobile';


export default function SearchSecond() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [showOptionsLocation, setShowOptions] = useState(false);
  const [showOptionsType, setShowOptionsType] = useState(false);
  const [showOptionsStatus, setShowOptionsStatus] = useState(false);
  const [showValue, setsShowValue]= useState(false);
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

  const handleButtonLocation = () => {
    setShowOptions(!showOptionsLocation);
  };

  const handleButtonType = () => {
    setShowOptionsType(!showOptionsType);
  };

  const handleButtonStatus = () => {
    setShowOptionsStatus(!showOptionsStatus);
  };

  const handleButtonValue = () => {
    setsShowValue(!showValue);
  };

  const handleMouseLeaveLocation = () => {
    setShowOptions(false);
    setShowOptionsType(false);
    setShowOptionsStatus(false);
    setsShowValue(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <SearchSecondMobile />;
  }

  return(
      <div className={styles.container_inputs}>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonLocation} className={`${styles.options_button}  ${showOptionsLocation ? styles.first : styles.first_active}`}>
            <span><Icon path={mdiHomeCity} size={.9} color={'#1919bf'}/></span> Categoria
          </button>
          {showOptionsLocation && (
            <div className={styles.options_container}>
              <label>
                <input type="checkbox" /> Apartamento
              </label>
              <label>
                <input type="checkbox" /> Casa
              </label>
              <label>
                <input type="checkbox" /> Comercial
              </label>
              <label>
                <input type="checkbox" /> Outros
              </label>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonType} className={styles.options_button}> 
            <span><Icon path={mdiCarBack} size={.9} color={'#1919bf'}/>Vagas</span> 
          </button>
          {showOptionsType && (
            <div className={styles.options_container}>
              <label>
                <input type="checkbox" /> 1
              </label>
              <label>
                <input type="checkbox" /> 2
              </label>
              <label>
                <input type="checkbox" /> 3
              </label>
              <label>
                <input type="checkbox" /> 4
              </label>
              <label>
                <input type="checkbox" /> 5+
              </label>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonStatus} className={styles.options_button}>
            <span><Icon path={mdiBedKingOutline} size={.9} color={'#1919bf'}/> Quartos </span> 
          </button>
          {showOptionsStatus && (
            <div className={styles.options_container}>
              <label>
                <input className={styles.input} type="checkbox" /> 1
              </label>
              <label>
                <input type="checkbox" /> 2
              </label>
              <label>
                <input type="checkbox" /> 3
              </label>
              <label>
                <input type="checkbox" /> 4
              </label>
              <label>
                <input type="checkbox" /> +5
              </label>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonValue} className={styles.options_button}>
          <span><Icon path={mdiCurrencyUsd} size={.9} color={'#1919bf'}/></span> Valor aproximado 
          </button>
          {showValue && (
            <div className={styles.options_container}>
              <label>
                <input type="checkbox" /> Até R$ 1.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 1.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 2.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 2.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 3.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 4.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 6.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 7.500.000
              </label>
              <label>
                <input type="checkbox" /> Acima de R$ 8.000.000
              </label>
            </div>
          )}
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
        <div className={styles.search}>
          <button>Buscar</button>
        </div>
      </div>
  )
}
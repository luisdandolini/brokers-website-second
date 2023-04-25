import React, { useState } from 'react';
import styles from '../styles/Accordion.module.css';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

const Accordion = ({ title, content, accordionContainer, accordionHeader, accordionContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion} style={accordionContainer}>
      <div className={styles.accordionHeader} style={accordionHeader} onClick={handleToggle}>
        {title}
        <span className={styles.accordionIcon}>{isOpen ? <Icon path={mdiChevronUp} size={1} /> : <Icon path={mdiChevronDown} size={1} />}</span>
      </div>
      {isOpen && <div className={styles.accordionContent} style={accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
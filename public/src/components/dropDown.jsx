import React, { useState } from 'react';
import styles from '../styles.css';
// import { AiOutlineUp } from 'react-icons/ai';

const FlyOut = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div onClick={() => { toggle(!open) }}>
        <p tabIndex={0} className={`${styles.headerSubtitle} ${styles.lightGrey}`} >Great Schools Rating</p>
      </div>
      {open && (
        <div className={styles.DDflex}>
          <div className={styles.Arrow}></div>
          <div>
            <div>
              <p>GreatSchools' Summary Rating calculation is based on 4 of the school's themed ratings, including: test scores, student/academic progress, college readiness, and equity.</p>
              <p className={`${styles.pad} ${styles.reviewText}`}>Learn More.</p>
            </div>
          </div>
        </div>
      )}
    </div>

  )

}

export default FlyOut;
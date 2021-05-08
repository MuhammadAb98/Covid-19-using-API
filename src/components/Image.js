import img from './image.png';
import React from 'react';
import styles from './image.module.css';

function Image(){
return (
    <div>

    
   <img className={styles.size} src={img}/>
   <h2 className={styles.name}>Tracker by: Muhammad Abdullah</h2>
  

    </div>
);

}

export default Image;
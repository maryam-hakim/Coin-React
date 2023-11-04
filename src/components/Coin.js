import React from 'react';
import styles from './coin.module.css'

const Coin = ({symbol , name , image , current_price , market_cap , price_change_24h}) => {
    return (
        <div className={styles.coin_container}>
            
           <img src={image} alt={name}></img>
           <span className={styles.name}>{name}</span>
           <span className={styles.Symbol}>{symbol}</span>
           <span>{current_price}</span>
           <span className={price_change_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}>{price_change_24h}</span>
           <span>{market_cap}</span>

        </div>
    );
};

export default Coin;
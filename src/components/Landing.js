import React , {useEffect , useState} from 'react';
import {getApi} from '../Services/api';
import Coin from './Coin'
import Loading from './Loading';
import styles from './landing.module.css'

const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");


    useEffect(() => 
    {
        const fetchApi = async() => {
            setCoins(await getApi());
        }
        fetchApi();
    },[]
    )

    const searchHandler = event =>{
        setSearch(event.target.value);
    }

    const searched = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={searchHandler} cla={styles.landing_input}></input>
            {
                coins.length > 0 ? 
                <div className={styles.landing}>{
                    searched.map(coin => <Coin
                                                key={coin.id}
                                                symbol={coin.symbol}
                                                name={coin.name}
                                                image={coin.image}
                                                current_price={coin.current_price.toLocaleString()}
                                                market_cap={coin.market_cap.toLocaleString()}
                                                price_change_24h={coin.price_change_24h.toLocaleString()}

                      />)
                      }</div> :
                <Loading />
            }
            
        </div>
    );
};

export default Landing;
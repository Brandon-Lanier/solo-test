import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoinItem from '../CoinItem/CoinItem';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_MARKET'})
  }, []);

  const marketData = useSelector(store => store.market);

  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <ul>
        {marketData.map(coin => (
          <CoinItem 
            key={coin.id}
            coin={coin}
            />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
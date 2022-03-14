import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoinItem from '../CoinItem/CoinItem';
import { useHistory } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_MARKET'})
    dispatch({type: 'GET_ASSETS'})
  }, []);

  const marketData = useSelector(store => store.market);
  const history = useHistory();

  const goPortfolio = () => {
    history.push('/portfolio')
  }

  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <button onClick={goPortfolio}>Portfolio</button>
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

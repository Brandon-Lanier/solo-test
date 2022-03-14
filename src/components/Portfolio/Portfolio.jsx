import { useSelector } from "react-redux"
import axios from "axios"
import PieChart from "../PieChart/PieChart"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"


function Portfolio() {

    const priceList = []

    // useEffect(() => {
        // const fetchPrices = async (assets) => {
        //     for (coin of assets) {
        //     const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.coin_id}&vs_currencies=usd&include_market_cap=false&include_24hr_change=true`)
        //     const data = await res.data
        //     priceList.push(data)
        //     }
        // };
        // fetchPrices();
    // })


    const assets = useSelector(store => store.assets)
    const market = useSelector(store => store.market)

    const totalValue = []
   const dispatch = useDispatch();

   const totalVal = useSelector(store => store.total)

    // const getCoinValue = async (coinid, coinQuantity) => {
    //      try{
    //          const result = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinid}&vs_currencies=usd&include_market_cap=false&include_24hr_change=true`)
    //          let total =  Number(result.data[coinid].usd * coinQuantity).toFixed(2);
             
    //      } catch(error) {
    //          console.log('Error Getting Price', error);
    //      }
    //     }
    //     .then(result => {
    //         console.log(result.data[coinid].usd);
    //         const total = Number(result.data[coinid].usd * coinQuantity).toFixed(2);
    //     }).catch(error => {
    //         console.log('Error getting data');
    //     })
    //     return total
    // }

    // const getCurrentPrice = (coinId, qty) {
    //     let selected = market.filter()
    // }

    // Find the current price stored in the market reducer
    const getValue = (symbol, quantity, market) => {
        const filteredCoin = market.filter((el) => el.symbol === symbol)
        const price = filteredCoin[0].current_price;
        console.log('price is', price);
        console.log('Quantity is', quantity);
        const total = Number(price * quantity).toFixed(2);
        totalValue.push(total)
        dispatch({type: 'SET_TOTAL', payload: total})
        return total
    }

    const getTotal = () => {
        console.log(totalVal);
    }
    
    console.log('total', totalVal);

    return(
        
        <div>
            {getTotal}
            <PieChart
            />
            <table>
                <thead>
                    <th>Coin</th>
                    <th>Quantity</th>
                    <th>Value</th>
                </thead>
                <tbody>
                    
                        {assets.map((coin) => (
                          <tr key={coin.id}>
                            <td>{coin.name}</td>
                            <td>{coin.quantity}</td>
                            <td>${getValue(coin.symbol, coin.quantity, market)}</td>
                         </tr>
                        )
                        )}
                    
                </tbody>

            </table>
        </div>
    
    )
}

export default Portfolio;
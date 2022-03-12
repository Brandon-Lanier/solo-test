import { useSelector } from "react-redux"
import axios from "axios"

function Portfolio() {

    const assets = useSelector(store => store.assets)
    const market = useSelector(store => store.market)
    
    // const getCoinValue = (coinid) => {
    //     axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinid}&vs_currencies=usd&include_market_cap=false&include_24hr_change=true`)
    //     .then(result => {
    //         console.log(result.data.usd);
    //         let coinvalue = result.data.usd;
    //         return coinvalue;
    //     }).catch(error => {
    //         console.log('Error getting data');
    //     })
    // }
    
    return(
        
        <div>
            <table>
                <thead>
                    <th>Coin</th>
                    <th>Quantity</th>
                    <th>Value</th>
                </thead>
                <tbody>
                    
                        {assets.map(coin => (
                          <tr>
                            <td>{coin.name}</td>
                            <td>{coin.quantity}</td>
                            {/* <td>{getCoinValue(coin.coin_id)}</td> */}
                         </tr>
                        )
                        )}
                    
                </tbody>

            </table>
        </div>
    
    )
}

export default Portfolio;
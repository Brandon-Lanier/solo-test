import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function CoinItem({coin}) {


    const NumberFormat = require('react-number-format');
    const history = useHistory();

    const handleClick = () => {
        console.log(coin);
        history.push(`/details/${coin.id}`)
    }

    return (
        <li onClick={handleClick}>
            <img src={coin.image} width="20px" heigh="20px" /> {coin.name}, {coin.current_price}, {(coin.price_change_percentage_24h).toFixed(2)}
        </li>

    )
}


export default CoinItem;
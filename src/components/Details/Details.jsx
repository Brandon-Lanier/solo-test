import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Details() {


    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: 'GET_DETAILS', payload: id })
    }, [])

    const dispatch = useDispatch();

    const history = useHistory();

    const coinDetails = useSelector(store => store.coinDetails[0])


    // const [coinDetails, setCoinDetails] = useState({}); 

    // const getDetails = () => {
    //     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    //     .then(result => {
    //         console.log(result.data);
    //         setCoinDetails(result.data)
    //     }).catch(error => {
    //         console.log(`Error fetching details for ${id}`, error);
    //     })
    // }


    console.log('Coin id is', id);

    const handleBack = () => {
        dispatch({type: 'CLEAR_DETAILS'})
        history.push('/about')
    }

    // ********************************* //
    // Add STUFF //
    
    const newCoin = {
        coin: '',
        quantity: 0
    }
    const [coin, setAddCoin] = useState(newCoin);
    const [coinValue, setCoinValue] = useState(0)

    const addCoin = () => {
        
    }

    console.log(coinValue);

console.log('the coin selected is', coinDetails);

    return (
        <>
            {/* {id} */}
            {coinDetails?.name}
            <br></br>
            {coinDetails?.current_price}
            <br></br>
            {<img src={coinDetails?.image} />}
            <button onClick={handleBack}>Go back</button>
            <br></br>
            <input type="number" onChange={(e) => setAddCoin(e.target.value)} />
            <button onClick={addCoin}>Add To Portfolio</button>
        </>

    )
}

export default Details;
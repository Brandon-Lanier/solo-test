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
        </>

    )
}

export default Details;
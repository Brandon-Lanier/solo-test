import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LineChart from "../LineChart/LineChart";



function Details() {


    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: 'GET_DETAILS', payload: id });
    }, [])

    const dispatch = useDispatch();

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const coinDetails = useSelector(store => store.coinDetails[0]);
    const chartData = useSelector(store => store.charts)
    console.log(chartData);

    // ----------------------Chart Stuff------------------------------- //
  
    let priceData = []
    
    const parseChartData = (dataArray) => {

        dataArray.forEach((subArray) => {priceData.push({x: subArray[0], y: Number(subArray[1].toFixed(2))})});
       
        dispatch({type: 'SET_CHART_DATA', payload: priceData})
    }
    //    https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`)


    //    const getChartData = () => {
    //        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`)
    //        .then(result => {
    //            parseChartData(result.data.prices)
    //            setLoading(false)
    //        }).catch(error => {
    //            console.log('Error getting chart data', error);

    //        })
    //    }

    //    let pricePerDay = []

    //    const parseChartData = (dataArray) => {
    //        dataArray.forEach((subArray) => {pricePerDay.push({x: subArray[0], y: Number(subArray[1].toFixed(2))})});
    //        console.log(pricePerDay);
    //    }
    // dataArray.forEach(subArray => parsedData.push({price: subArray[0], date: subArray[1]}))
    // console.log(parsedData);
    // ----------------------------------------------------- //


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
        dispatch({ type: 'CLEAR_DETAILS' })
        history.push('/about')
    }

    // ********************************* //
    // Add STUFF //

    // const newCoin = {
    //     coin: '',
    //     quantity: 0
    // }
    // const [coinAmount, setCoinAmount] = useState(newCoin);
    // const [coinValue, setValue] = useState(0)

    const [coinQty, setCoinQty] = useState('')
    const [coinId, setCoinId] = useState('')
    const [dollarAmount, setDollarAmount] = useState('');
    const [value, setValue] = useState('')

    let currentPrice = coinDetails?.current_price;

    // const handleUpdate = (e) => {
    //     setCoinQty(e.target.value);
    //     // handlePriceChange();
    // }

    // const handlePriceChange = () => {
    //     setDollarAmount(currentPrice * coinQty);
    //     console.log(dollarAmount);
    // }

    const addCoin = () => {
        history.push(`/addcoin/${id}`);
    }


    console.log('the coin selected is', coinDetails);

    return (
        <>
            <div>
              
                <LineChart
                    id={id}
                />
            
                {/* {id} */}
                {coinDetails?.name}
                <br></br>
                {coinDetails?.current_price}
                <br></br>
                {<img src={coinDetails?.image} />}
                <br></br>
                <button onClick={handleBack}>Go back</button>
                <br></br>
                {/* Below Works but want to try updating pricing dynamically */}
                {/* <input type="number" value={coinQty} onChange={(e) => setCoinQty(e.target.value)} /> */}
                {/* <input type="text" value={coinQty} onChange={handleUpdate} /> */}
                <button onClick={addCoin}>Add To Portfolio</button>
            </div>

        </>

    )

}

export default Details;
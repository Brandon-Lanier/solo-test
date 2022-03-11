import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



function AddCoins() {

    // const [coinQty, setCoinQty] = useState('')
    // const [coinId, setCoinId] = useState('')
    // const [dollarAmount, setDollarAmount] = useState('');
    // const [value, setValue] = useState('')

    const [quantity, setQuantity] = useState(0);
    const [dollarAmount, setDollarAmount] = useState(0)

    const coin = useSelector(store => store.coinDetails[0])
   
    const handleUpdate = (e) => {
        setQuantity(e.target.value);
        setDollarAmount(e.target.value * coin.current_price)
        console.log(quantity, dollarAmount);
    }

    const addCoin = () => {
        setCoinId(id)
        console.log('Dollar Amount', dollarAmount);
    }

    
    return (
        <div>
            <h2>Add {coin.name} to your portfolio!</h2>
            <p>Amount to purchase</p>
            <input type='number' value={quantity} onChange={handleUpdate}/>
            <p>Market Value: {dollarAmount}</p>
        </div>

    )
}

export default AddCoins;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require("axios");
// const user = require('pg/lib/defaults');


router.get('/', (req, res) => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h')
        .then(result => {
            // console.log(result.data);
            res.send(result.data)
        }).catch(err => {
            // console.log('Error Getting Market Data', err);
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user.id);
        const coinName = req.body.coin.name;
        const symbol = req.body.coin.symbol
        const quantity = Number(req.body.quantity)
        const qty = quantity.toFixed(4) // Changing to 4 decimals for DB storage
        const userId = req.user.id
        const qryTxt = `
        INSERT INTO "assets" ("name", "symbol", "quantity", "user_id") 
        VALUES ($1, $2, $3, $4)
        ON CONFLICT ("symbol")
        DO UPDATE SET "quantity" = "assets"."quantity" + $5;`

        pool.query(qryTxt, [coinName, symbol, qty, userId, qty])
            .then(result => {
                console.log('You added a coin!');
                res.sendStatus(201)
            }).catch(err => {
                console.log('Error in Add Coin POST', err);
            })
    } else {
        res.sendStatus(403);
    }
})

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h

module.exports = router;
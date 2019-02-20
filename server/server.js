const express = require("express");
const app = express();
const fetch = require('node-fetch');
const cors = require('cors')
const URL_MELI = 'https://api.mercadolibre.com/sites/MLA/search';
const URL_MELI_ITEM = 'https://api.mercadolibre.com/items'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options('*', cors());

function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

app.get("/", function (req, res) {
    try {
        res.send('Hello World!');
    } catch (err) {
        console.log("Error POST");
        console.log(err);
    }
});

app.get("/api/items", async function (req, res) {
    try {
        const queryString = objToQueryString({
            q: req.params.q
        });

        const response = await fetch(`${URL_MELI}?${queryString}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json());
        const result = Object.assign({},
            {
                author: {
                    name: 'Damian',
                    lastname: 'Gianni'
                },
                categories: Array.from(response.results.map(obj => obj.category_id)),
                items: response.results.map(obj => {
                    return Object.assign({}, {
                        id: obj.id,
                        title: obj.title,
                        price: {
                            currency: obj.currency_id,
                            amount: obj.price,
                            decimals: 2
                        },
                        picture: obj.thumbnail,
                        condition: obj.condition,
                        free_shipping: obj.shipping.free_shipping
                    });
                })
            }
        );
        res.send(result);
    } catch (err) {
        console.log('ERROR ', err);
        res.send({ error: err });
    }
});

app.get("/api/items/:id", async function (req, res) {
    try {

        const response = await fetch(`${URL_MELI_ITEM}/${req.params.id}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json());

        const responseDescription = await fetch(`${URL_MELI_ITEM}/${req.params.id}/description`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json());
        console.log(response);

        const result = {
            author: {
                name: 'Damian',
                lastname: 'Gianni'
            },
            item: {
                id: response.id,
                title: response.title,
                price: {
                    currency: response.currency_id,
                    amount: response.price,
                    decimals: 2
                },
                picture: response.pictures[0].url,
                condition: response.condition,
                free_shipping: response.shipping.free_shipping,
                sold_quantity: response.sold_quantity,
                description: responseDescription.plain_text
            }
        }
        res.send(result);
    } catch (err) {
        console.log('ERROR ', err);
        res.send({ error: err });
    }
});

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [products, setProducts] = useState();
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async() => {
        try {
            const res = await axios.get('/api/products');
            console.log('res => ', res.data);
            setProducts(res.data)
        } catch (err) {
            console.log(err.response.data);
            setMsg(err.response.data.msg)
        }
    }

    return(
        <>
            <h1>Shop page</h1>
            {
               products ? products.map(item => {
                return(
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                );
               })
               : null
            }
            <div>
                {msg}
            </div>
        </>
    )
}

export default Home;
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BASE_URL=process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        all()
    },[])

    const all = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products`);
            const data = await res.json();
            setProducts(data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h1>Shop</h1>
            {
                products.map(item => {
                    return(
                        <div key={item.id} style={{
                            display:'inline-block',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid white'
                        }}>
                            <h4>{item.name} </h4>
                            <h5>{item.price} </h5>
                            <Link style={{
                                color: 'black', 
                                backgroundColor: 'white', 
                                padding: '5px 10px', 
                                border: '1px solid white', 
                                borderRadius: '36px'
                                }} to={`/${item.id}`}>Shop Now</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products;
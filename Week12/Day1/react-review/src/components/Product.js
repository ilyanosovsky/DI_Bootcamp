
const Product = (props) => {
    console.log(props);
    const {name,price} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Product;
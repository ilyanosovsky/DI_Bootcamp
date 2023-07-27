const Shop = (props) => {
    const throwError = () => {
        throw new Error("Error in shop screen");
    };

    return <h1>{throwError()}</h1>
};

export default Shop;
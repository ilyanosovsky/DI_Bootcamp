const Child = (props) => {
    console.log(props);
    return(
        <>
            <h1>{props.title}</h1>
            {/* <button onClick={()=> props.changeTitle('iVan')}>Change Title</button> */}
        </>
    )
}

export default Child;
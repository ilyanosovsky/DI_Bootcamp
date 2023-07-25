const Parent = (props) => {
    console.log(props);
    // return (
    //     <>
    //         <h1>{props.title}</h1>
    //     </>
    // )
    if (props.username === 'admin') {
        return (
            <h1>Admin Dashboard</h1>
        )
    }
    return (
        props.children
    )
}

export default Parent;
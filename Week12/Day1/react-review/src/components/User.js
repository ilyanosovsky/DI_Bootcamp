import "./User.css";
import Button from '@mui/material/Button';

const User = () => {
    // const styling = {color:"blue", fontSize:"50px", margin:"150px"};
    const userList = [
        {
        name: 'Ivan',
        email: 'ivan@gmail.com',
        isEmail: false,
        username: "ivankozin"
    },
    {
        name: 'Ivan2',
        email: 'ivan2@gmail.com',
        isEmail: true,
        username: "ivankozin2"
    },
    {
        name: 'Ivan3',
        email: 'ivan3@gmail.com',
        isEmail: false,
        username: "ivankozin3"
    }
];

    const listitems = userList.map((item,index) => {
        return(
            <h1 key={index}>Hello {item.name}</h1>
        )
    })
    console.log("list => ", listitems);
    return (
        <>
            {listitems}
            <Button variant="contained">Contained</Button>
        </>
    )
}
export default User;
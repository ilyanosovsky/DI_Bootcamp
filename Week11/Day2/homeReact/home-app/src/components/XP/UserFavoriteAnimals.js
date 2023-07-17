// In a separate Javascript file named UserFavoriteAnimals.js, 
// create a new Class Component called UserFavoriteAnimals. 
// Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// In the UserFavoriteAnimals component, use the map method 
// to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter 
// of the map function as a key to uniquely identify each HTML item

const UserFavoriteAnimals = (props) => {
    const {favAnimals} = props;
    return (
        <ul>
            {
            favAnimals.map((item, index) => {
                return (
                    <li key = {index}> {item} </li>
                )
          })
        }
        </ul>
    )
}
export default UserFavoriteAnimals
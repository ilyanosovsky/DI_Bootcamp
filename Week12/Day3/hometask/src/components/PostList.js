import data from '../data.json';

const PostList = () => {
    return (
        <>
        <h1>Hi This is a Title!</h1>
            <ul>
                {data.map(post => {
                    return (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default PostList;
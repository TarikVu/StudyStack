import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

// A script letting us find the name of an author from our author slices given an ID.

// A post Author expects a userId
const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor
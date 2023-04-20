import React, {useState} from "react";
function LikeButton(){
    const [likes, setLikes] = useState(0);
    function handleLike(){
        setLikes(likes+1)
    }
    return <button onClick={handleLike}> {likes} Likes </button>
}
export default LikeButton;
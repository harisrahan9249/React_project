import React, {useState} from 'react';
 
export function Likebutton(props){
    const [likes, setLikes] = useState(0);
 
    const handleLike = () => {
        setLikes(likes + 1);
    }
 
    return (
        <>
            
            <button onClick={handleLike}>I Like</button>
            <p>Likes: {likes}</p>
        </>
    )
}
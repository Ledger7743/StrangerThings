import React from "react";

const PostButtons = ({action, content, nameOfClass }) => {
    return (
        <button className={nameOfClass} onClick={action}>
            {content}
        </button>
    );
};

export default PostButtons
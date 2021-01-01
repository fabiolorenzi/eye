import React from "react";

import Post from "../img/post.png";

function Banner() {
    return(
        <div className="banner">
            <img src={Post} alt="post" />
        </div>
    );
};

export default Banner;
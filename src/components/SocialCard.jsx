import React from "react";

import FirstBar from "./FirstBar.jsx";
import Banner from "./Banner.jsx";
import LastBar from "./LastBar.jsx";

function SocialCard() {
    return(
        <div className="fullCard">
            <FirstBar />
            <Banner />
            <LastBar />
        </div>
    );
};

export default SocialCard;
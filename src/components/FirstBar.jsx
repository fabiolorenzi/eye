import React from "react";

import accountImage from "../img/eye_icon.jpg";

function FirstBar() {
    const name = "Eye Project";
    const title = "@" + name.replace(/\s/g, "");

    const Date0 = () => {
        const t0day = new Date();
        var day = t0day.getDate();
        if (day < 10) {
            day = "0" + day;
        };
        var month = t0day.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        };
        var year = t0day.getFullYear();
        const today = year + "-" + month + "-" + day;
        return (<p className="date">{today}</p>)
    };
    

    return(
        <div className="firstBar">
            <div className="logo">
                <img src={accountImage} alt="account logo" />
            </div>
            <div className="infoLines">
                <div className="firstLine">
                    <p className="name">{name}</p>
                    <p className="address">{title}</p>
                    <Date0 />
                </div>
                <div className="secondLine">
                    <p>Feel yourself free to type whatever you want.</p>
                </div>
                <div className="thirdLine">
                    <p>#firstpost #development #skullProject</p>
                </div>
            </div>
        </div>
    );
};

export default FirstBar;
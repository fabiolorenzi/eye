import React, {useState} from "react";

import { BsChatDotsFill, BsHeartFill, BsCloudUpload, BsBoxArrowRight } from "react-icons/bs";

function LastBar() {

    //---------STATES---------

    const [like, setLike] = useState({
        pos: false,
        count: 0
    });

    const [comment, setComment] = useState(0);

    const [share, setShare] = useState({
        pos: false,
        count: 0
    });

    const [save, setSave] = useState({
        pos: false,
        count: 0
    });

    //---------FUNCTIONS---------

    const likeBut = e => {
        e.preventDefault();

        if (!like.pos) {
            let pre = like.count + 1;
            setLike({pos: true, count: pre});
            e.target.classList.add("likeC");
        } else {
            let pre = like.count - 1;
            setLike({pos: false, count: pre});
            e.target.classList.remove("likeC");
        };
    };

    const comBut = e => {
        e.preventDefault();

        setComment(comment + 1);
    };

    const shareBut = e => {
        e.preventDefault();

        if (!share.pos) {
            let pre = share.count + 1;
            setShare({pos: true, count: pre});
            e.target.classList.add("shareC");
        } else {
            let pre = share.count - 1;
            setShare({pos: false, count: pre});
            e.target.classList.remove("shareC");
        };
    };

    const saveBut = e => {
        e.preventDefault();

        if (!save.pos) {
            let pre = save.count + 1;
            setSave({pos: true, count: pre});
            e.target.classList.add("saveC");
        } else {
            let pre = save.count - 1;
            setSave({pos: false, count: pre});
            e.target.classList.remove("saveC");
        };
    };

    //---------RETURN_PART---------

    return(
        <div className="lastBar">
                <div className="btn">
                    <BsHeartFill name="likeB" className="icon" onClick={likeBut} />
                    <p>{like.count}</p>
                </div>
                <div className="btn">
                    <BsChatDotsFill name="comB" className="icon" onClick={comBut} />
                    <p>{comment}</p>
                </div>
                <div className="btn">
                    <BsBoxArrowRight name="shareB" className="icon" onClick={shareBut} />
                    <p>{share.count}</p>
                </div>
                <div classList="btn">
                    <BsCloudUpload name="saveB" className="icon" onClick={saveBut} />
                    <p className="pBug">{save.count}</p>
                </div>
        </div>
    );
};

export default LastBar;
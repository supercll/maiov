import React from "react";
import Tab from "../../common/component/tabs";
import Article from "./article";
import Good from "./good";
import MessageList from "./messsageList";
export default function Main(props) {
    const { data, setShow } = props;
    return (
        <div
            className="workDetails"
            onTouchStart={() => {
                console.log(1111111);
                setShow(false);
            }}
        >
            <Tab data={data.image_path.map(item => item.path)} render={src => <img src={src} />} />
            <div className="miiaov_box">
                <Article data={data} />
                <article className="miiaov_comment">
                    <Good goodNub={data.good} id={data.id} />
                    <MessageList />
                </article>
            </div>
        </div>
    );
}

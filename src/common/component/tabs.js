import React from 'react';

const Tab = (props) => {
    const { data, render } = props;
    return (
        <section className="banner">
            <div className="banner_img">
                <ul className="banner_list clearfix">
                    {data.map((item, index) => <li key={index}> {render(item)}</li>)}
                </ul>
            </div>

            <ul className="banner_nav">
                {data.map((item, index) => <li key={index}></li>)}
            </ul>
        </section>
    );
};

export default Tab;
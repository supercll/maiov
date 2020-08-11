import React from "react";
import Tab from "../../common/component/tabs";

const LecturerTab = props => {
    const { data, newData } = props;
    return data.length < 1 ? (
        ""
    ) : (
        <Tab
            data={newData}
            render={data => {
                return (
                    <ul className="lecturer_list">
                        {data.map(item => {
                            return (
                                <li key={item.id}>
                                    <img src={item.icon} />
                                    <p>{item.title}</p>
                                </li>
                            );
                        })}
                    </ul>
                );
            }}
        ></Tab>
    );
};

export default LecturerTab;

import "./common/css/reset.css";
import "./common/css/common.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import IndexRoute from "./router";

const App = () => {
    return (
        <BrowserRouter>
            {/* <Frame> */}
            <IndexRoute />
            {/* </Frame> */}
        </BrowserRouter>
    );
};

export default App;

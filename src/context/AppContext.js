import React from "react";

const AppContext = React.createContext({
    user: {},
    token: "",
});

export default AppContext;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import routes from "./utils/routes/index";
import jwt_decode from "jwt-decode";
import AppContext from "./context/AppContext";
import Loading from "./components/Loading/Loading";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import "react-image-crop/dist/ReactCrop.css";
import "react-image-crop/lib/ReactCrop.scss";
import MainRoute from "./utils/routes/MainRoute";

function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let token = localStorage.getItem("auth-token");
        if (token) {
            setUser(jwt_decode(token));
            setToken(token);
            setIsLoading(false);
        } else {
            setToken("");
            setUser({});
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <Loading />;
    else {
        return (
            <Routes>
                <AppContext.Provider value={{ user, setUser, token, setToken }}>
                    <div className="main">
                        <Switch>
                            {routes.map((route, index) => {
                                if (route.protected === "guest") {
                                    return (
                                        <GuestRoute
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                        >
                                            <route.component />
                                        </GuestRoute>
                                    );
                                }
                                if (route.protected === "auth") {
                                    return (
                                        <AuthRoute
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                        >
                                            <route.component />
                                        </AuthRoute>
                                    );
                                }
                                return (
                                    <MainRoute
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                    >
                                        <route.component />
                                    </MainRoute>
                                );
                            })}
                        </Switch>
                    </div>
                </AppContext.Provider>
            </Routes>
        );
    }
}

export default App;

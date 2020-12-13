import React from "react";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/Home/SignUp";
import SignIn from "../../pages/Home/SignIn";
import ForgetPassword from "../../pages/Home/ForgetPassword";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Account from "../../pages/Dashboard/Account";
import AddUrl from "../../pages/Dashboard/AddUrl";
import Setting from "../../pages/Dashboard/Setting";

export default [
    {
        path: "/",
        exact: true,
        component: () => <Home />,
        protected: null,
    },
    {
        path: "/signup",
        component: () => <SignUp />,
        protected: "guest",
    },
    {
        path: "/signin",
        component: () => <SignIn />,
        protected: "guest",
    },
    {
        path: "/forgetpassword",
        component: () => <ForgetPassword />,
        protected: "guest",
    },
    {
        path: "/dashboard",
        component: () => <Dashboard />,
        protected: "auth",
    },
    {
        path: "/account",
        component: () => <Account />,
        protected: "auth",
    },
    {
        path: "/addurl",
        component: () => <AddUrl />,
        protected: "auth",
    },
    {
        path: "/setting",
        component: () => <Setting />,
        protected: "auth",
    },
];

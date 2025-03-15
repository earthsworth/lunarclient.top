import {useEffect} from "react";
import {useNavigate} from "react-router";
import * as React from "react";

interface Props {
    children?: React.ReactNode;
}

function RequireAuth(props: Props) {
    const isAuthenticated = () => {
        return localStorage.getItem("token") !== null;
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/dashboard/login");
        }
    }, []);

    return isAuthenticated() ? props.children : null;
}

export default RequireAuth;
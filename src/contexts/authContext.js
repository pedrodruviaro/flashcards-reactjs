import React, { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import api from "../services/api";

export const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authorized, setAuthorized] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
            history.push("/");
            return;
        }

        console.log(user);

        setUser(user);
        setAuthorized(true);
        setLoading(false);
        sessionStorage.setItem("user", JSON.stringify(user));
        api.defaults.headers.authorization = `Bearer ${user.token}`;
        history.push(`${location.pathname}`);
    }, [history, location.pathname]);

    async function login(credentials) {
        setLoading(true);
        try {
            const { data } = await api.post("/auth/login", credentials);
            if (data) {
                setUser(data);
                setAuthorized(true);
                setLoading(false);
                sessionStorage.setItem("user", JSON.stringify(data));
                api.defaults.headers.authorization = `Bearer ${data.token}`;
                history.push("/dashboard");
            }
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    async function logout() {
        setUser(null);
        setAuthorized(null);
        api.defaults.headers.authorization = undefined;
        history.push("/");
    }

    return (
        <AuthContext.Provider
            value={{ user, loading, authorized, error, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

import React, { useState } from "react";
import { Container, FormContainer, BannerContainer } from "./styles";
import CustomInput from "../../components/CustomInput";
import { useAuth } from "../../hooks/useAuth";

export default function Index() {
    const { login, loading, error } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        login(credentials);
    }

    return (
        <Container>
            <BannerContainer></BannerContainer>

            <FormContainer>
                <h1>Welcome back</h1>
                <span>Sign in to continue using studify</span>

                <form onSubmit={handleSubmit}>
                    <CustomInput
                        type="email"
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomInput
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <a href="/">Forgot your password?</a>

                    <button disabled={loading} type="submit">
                        Login
                    </button>
                </form>

                <p>
                    Don't have an account? <a href="/register">Register Here</a>
                    .
                </p>
            </FormContainer>
        </Container>
    );
}

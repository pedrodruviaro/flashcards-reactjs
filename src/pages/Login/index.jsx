import React from "react";
import { Container, FormContainer, BannerContainer } from "./styles";
import CustomInput from "../../components/CustomInput";

export default function index() {
    return (
        <Container>
            <BannerContainer className="banner-container"></BannerContainer>

            <FormContainer className="form-container">
                <h1>Welcome back</h1>
                <span>Sign in to continue using studify</span>

                <form>
                    <CustomInput type="email" id="email" label="Email" />
                    <CustomInput
                        type="password"
                        id="password"
                        label="Password"
                    />

                    <a href="/">Forgot your password?</a>

                    <button type="submit">Login</button>
                </form>

                <p>
                    Don't have an account? <a href="/register">Register Here</a>
                    .
                </p>
            </FormContainer>
        </Container>
    );
}

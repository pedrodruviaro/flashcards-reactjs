import { Container, FormContainer, BannerContainer } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

export default function Index() {
    const { login, loading } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm();

    const onSubmit = (data) => {
        clearErrors();
        login(data);
    };

    return (
        <Container>
            <BannerContainer></BannerContainer>

            <FormContainer>
                <h1>Welcome back</h1>
                <span>Sign in to continue using studify</span>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Email is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Too Short. Must have a minimun of 6 characters",
                            },
                            maxLength: 150,
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Too Short. Must have a minimun of 6 characters",
                            },
                            maxLength: 72,
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}

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

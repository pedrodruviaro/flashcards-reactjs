import styled from "styled-components";

export const Container = styled.main`
    max-width: 1440px;
    margin: 0 auto;

    height: 100vh;
    padding: 2rem;

    outline: 2px solid ${(props) => props.theme.brownLight};
    outline-offset: -1rem;

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    > * {
        flex: 1;
    }

    @media (max-width: 720px) {
        background-image: linear-gradient(to top, #00000016, white, #00000016);
    }
`;

export const BannerContainer = styled.div`
    background-image: url(${"/images/avatar.jpg"});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 720px) {
        display: none;
    }
`;

export const FormContainer = styled.div`
    background-color: #fff;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        color: ${(props) => props.theme.blue};
    }

    span {
        display: inline-block;
        margin-bottom: 2rem;
        font-size: 1.15rem;
    }

    form {
        margin: 1rem 0 0;

        > div + div {
            margin: 2rem auto 1rem;
        }

        a {
            display: inline-block;
            margin-bottom: 1rem;
            color: ${(props) => props.theme.brownLight};
            font-size: 0.9rem;
        }

        button {
            margin-bottom: 2rem;

            background-color: ${(props) => props.theme.blue};
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            color: ${(props) => props.theme.light};
            font-weight: 600;
            outline: none;
            border: none;
            width: 100%;
            transition: all 200ms;

            &:hover {
                filter: brightness(1.1);
            }
        }
    }

    p {
        a {
            color: ${(props) => props.theme.brownLight};
            display: inline-block;
            position: relative;

            &:after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: ${(props) => props.theme.brownLight};
                position: absolute;
                display: block;
                transform: scale(0);
                transition: transform 300ms;
            }

            &:hover::after {
                transform: scale(1);
            }
        }
    }
`;

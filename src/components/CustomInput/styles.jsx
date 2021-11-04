import styled from "styled-components";

export const CustomInput = styled.div`
    position: relative;
    width: 100%;

    input {
        font-size: 1rem;
        border: 0;
        outline: none;
        padding: 0.5rem;
        border-bottom: 1px solid;
        width: 100%;
    }

    label {
        position: absolute;

        transition: all 0.3s;
        z-index: 2;

        left: 0.45rem;
        bottom: 5px;
    }

    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus)
        ~ .form__label {
        font-size: 0.7rem;
        bottom: 2.25rem;

        opacity: 0.8;
    }
`;

import React from "react";
import { CustomInput } from "./styles";

export default function Index({ type, id, label }) {
    return (
        <CustomInput>
            <input
                type={type}
                id={id}
                placeholder=" "
                className="form__input"
            />
            <label htmlFor={id} className="form__label">
                {label}
            </label>
        </CustomInput>
    );
}

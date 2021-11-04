import React from "react";
import { CustomInput } from "./styles";

export default function Index({ type, id, label, value, onChange }) {
    return (
        <CustomInput>
            <input
                type={type}
                id={id}
                placeholder=" "
                className="form__input"
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id} className="form__label">
                {label}
            </label>
        </CustomInput>
    );
}

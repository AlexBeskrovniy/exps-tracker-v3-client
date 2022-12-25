import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    color: var(--color-white);
    border: 2px solid var(--border-color);
    border-radius: 999rem;
    box-shadow: 0 0 15px 2px var(--border-color);
    &:focus, &:hover {
        box-shadow: none;
    }
    &[type="submit"] {
        margin-top: 2rem;
        padding: .5rem;
        background: var(--button-color);
        width: 80%;
    }
    &[type="submit"]:hover {
        cursor: pointer;
        appearance: none;
        opacity: .8;
        box-shadow: none;
    }
`

import styled from 'styled-components';

const Button = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: .5rem;
    color: var(--color-white);
    background: var(--button-color);
    border: 2px solid var(--border-color);
    border-radius: 999rem;
    box-shadow: 0 0 15px 2px var(--border-color);
    &:hover {
        cursor: pointer;
        appearance: none;
        opacity: .8;
        box-shadow: none;
    }
`;

export default Button;
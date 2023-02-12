import styled from 'styled-components';

export const RoundButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    border-radius: 50%;
    color: var(--color-white);
    background: var(--button-color);
    border: 2px solid var(--border-color);
    box-shadow: 0 0 15px 2px var(--border-color);
    &:hover {
        cursor: pointer;
        appearance: none;
        opacity: .8;
        box-shadow: none;
    }
`
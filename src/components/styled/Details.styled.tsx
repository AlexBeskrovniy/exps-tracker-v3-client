import styled from "styled-components";

export const StyledHeader = styled.header`
    padding-block: 1rem;
    color: var(--color-white);
    background: var(--bg-lighter);

`

export const StyledFooter = styled.footer`
    padding-block: 1rem;
    color: var(--color-white);
    background: var(--bg-lighter);
    width: 100vw; //TEMP
    position: fixed; //TEMP
    bottom: 0;
    left: 0;
`

export const CardWrapper = styled.div`
    width: min(350px, 100%);
    padding: .5rem;
    margin-bottom: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 1rem;
`
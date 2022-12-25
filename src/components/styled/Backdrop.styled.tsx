import styled from "styled-components";

interface DrawerProps {
    open: 'init' | 'open' | 'closed'
}

export const Backdrop = styled.div<DrawerProps>`
    display: ${({ open }) => open === 'open' ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: var(--color-white);
    opacity: 0.2;
`
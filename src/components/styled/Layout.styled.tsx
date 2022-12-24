import styled from "styled-components";

interface FlexProps {
    width?: string
    height?: string
    padding?: string
    direction?: string
    justify?: string
    align?: string
}

export const Container = styled.div`
    height: 100%;
    max-width: min(1400px, 90vw);
    margin-inline: auto;
`

export const Flex = styled.div<FlexProps>`
    display: flex;
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    padding: ${({ padding }) => padding || '0'};
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};
`

export const DrawerWrapper = styled.div`
    transform: translateX(-100%);
    width: 90vw;
    height: 100vh;
    z-index: 3;
    background: var(--bg-drawer);
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 500ms;
    animation-fill-mode: both;

    &[open] {
        animation: slideOut;
    }

    &[close] {
        animation: slideIn;
    }

    @keyframes slideOut {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
`
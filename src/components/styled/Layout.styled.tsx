import styled from "styled-components";

interface FlexProps {
    width?: string
    height?: string
    padding?: string
    direction?: string
    justify?: string
    align?: string
    gap?: string
}

interface ModalProps {
    open: 'init' | 'open' | 'closed'
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
    gap: ${({ gap }) => gap || 0 };
`

export const DrawerWrapper = styled.div<ModalProps>`
    transform: translateX(-100%);
    width: 90vw;
    height: 100vh;
    z-index: 3;
    background: var(--bg-drawer);
    position: absolute;
    top: 0;
    left: 0;
    animation: ${({ open }) => {
        switch(open) {
            case 'init':
                return 'none';
            case 'open':
                return 'slideFromLeft';
            case 'closed':
                return 'slideToLeft';
        }
    }};
    animation-duration: 500ms;
    animation-fill-mode: both;

    @keyframes slideFromLeft {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }

    @keyframes slideToLeft {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
`

export const ModalWrapper = styled.div<ModalProps>`
    position: absolute;
    width: min(350px, 90vw);
    height: 60vh;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
    transform: translateY(-150%);
    background: var(--bg-drawer);
    border: 2px solid var(--border-color);
    border-radius: 1rem;
    z-index: 3;
    animation: ${({ open }) => {
        switch(open) {
            case 'init':
                return 'none';
            case 'open':
                return 'slideFromTop';
            case 'closed':
                return 'slideToTop';
        }
    }};
    animation-duration: 500ms;
    animation-fill-mode: both;

    @keyframes slideFromTop {
        from {
            transform: translate3d(-50%, -150%, 0);
        }

        to {
            transform: translate3d(-50%, 0, 0);
        }
    }

    @keyframes slideToTop {
        from {
            transform: translate3d(-50%, 0, 0);
        }

        to {
            transform: translate3d(-50%, -150%, 0);
        }
    }
`

export const NavLinkWrapper = styled.span`
    width: 100%;
    padding-block: 1rem;
    border-top: 2px solid var(--border-color);
    &:last-child {
        border-bottom: 2px solid var(--border-color);
    }
    > a {
        display: flex;
        font-size: 1.5rem;
    } 
`
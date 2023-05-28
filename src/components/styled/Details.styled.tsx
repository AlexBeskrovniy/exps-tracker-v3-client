import styled from "styled-components";

interface ModalProps {
    open: 'init' | 'open' | 'closed'
}

export const StyledHeader = styled.header`
    padding-block: 1rem;
    color: var(--color-white);
    background: var(--bg-lighter);
    width: 100vw; //TEMP

`

export const StyledFooter = styled.footer`
    padding-block: 1rem;
    color: var(--color-white);
    background: var(--bg-lighter);
    width: 100vw; //TEMP
`

export const CardWrapper = styled.div`
    width: min(350px, 100%);
    margin-top: 1rem;
    border-bottom: 2px solid var(--border-color);
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
    padding: .5rem;
    width: min(350px, 90vw);
    height: 60vh;
    top: 20%;
    left:50%;
    transform: translateX(-50%);
    transform: translateY(-150%);
    background: var(--bg);
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
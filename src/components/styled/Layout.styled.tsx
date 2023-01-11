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
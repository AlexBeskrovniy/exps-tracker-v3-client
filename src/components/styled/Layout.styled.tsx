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
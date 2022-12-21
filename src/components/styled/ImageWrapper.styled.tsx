import styled from "styled-components";

interface ImageWrapperProps {
    size?: string
}

const ImageWrapper = styled.div<ImageWrapperProps>`
    width: ${({ size }) => size || 'max(200px, 30vw)'};
    height: ${({ size }) => size || 'auto'};
    > img {
        color: var(--border-neon);
        width: 100%;
        height: 100%
    }
    > svg {
        fill: var(--border-neon);
        width: ${({ size }) => size || 'max(200px, 30vw)'};
        height: ${({ size }) => size || 'auto'};
    }
`

export default ImageWrapper;
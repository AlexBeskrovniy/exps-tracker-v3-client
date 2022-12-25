import styled from "styled-components";

interface ImageWrapperProps {
    size?: string
}

const ImageWrapper = styled.div<ImageWrapperProps>`
    width: ${({ size }) => size || 'max(200px, 30vw)'};
    height: ${({ size }) => size || 'auto'};
    > img {
        color: var(--border-color);
        width: 100%;
        height: 100%
    }
    > svg {
        fill: var(--border-color);
        width: ${({ size }) => size || 'max(200px, 30vw)'};
        height: ${({ size }) => size || 'auto'};
        cursor: pointer;
    }
`

export default ImageWrapper;
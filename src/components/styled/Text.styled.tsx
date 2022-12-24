import styled from "styled-components";

interface TextProps {
    margin?: string
}

export const Heading = styled.h1`
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--color-white);
    text-align: center;
`

export const Text = styled.p<TextProps>`
    margin-bottom: ${({ margin }) => margin || '1rem'};
    color: var(--color-white);
    font-size: 1.2rem;
`
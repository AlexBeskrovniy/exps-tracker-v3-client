import styled from "styled-components";

type HeadingProps = {
    text: string
}

const StyledHeading = styled.h1`
    font-weight: 600;
    font-size: 40px;
    color: #fff;
    text-align: center;
`

const Heading:React.FC<HeadingProps> = ({ text }) => {
    return (
        <StyledHeading>{ text }</StyledHeading>
    );
}

export default Heading;
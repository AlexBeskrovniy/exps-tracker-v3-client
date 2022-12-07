import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 0;
    padding: .5rem;
    color: #fff;
    background: #5A189A;
    border: 2px solid #C77DFF;
    border-radius: 999rem;
    box-shadow: 0 0 15px 2px rgb(199, 125, 255);
    &:hover {
        cursor: pointer;
        appearance: none;
        opacity: .8;
        box-shadow: none;
    }
`;


const Button = () => {
    return(
        <StyledButton>
            I am Button
        </StyledButton>
    );
}

export default Button;
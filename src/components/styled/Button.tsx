import styled from 'styled-components';

type ButtonProps = {
    text: string
}

const StyledButton = styled.button`
    margin-bottom: 2rem;
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


const Button:React.FC<ButtonProps> = ({ text }) => {
    return(
        <StyledButton>
            { text }
        </StyledButton>
    );
}

export default Button;
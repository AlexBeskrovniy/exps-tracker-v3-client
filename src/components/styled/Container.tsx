import styled from 'styled-components';

type Children = {
    children?: React.ReactNode 
}

const ViewContainer = styled.div`
    height: 100%;
    max-width: min(1400px, 90vw);
    margin-inline: auto;
`

const Container:React.FC<Children> = ({ children }) => {
    return(
        <ViewContainer>
            { children }
        </ViewContainer>
    );
}

export default Container;
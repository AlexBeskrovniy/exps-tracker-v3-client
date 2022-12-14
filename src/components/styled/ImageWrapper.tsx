import styled from "styled-components";

type ImageProps = {
    image: string
}

const ImageWrapper = styled.div`
    width: max(200px, 30vw);
    height: auto;
    > img {
        width: 100%;
        height: 100%
    }
`

const Image:React.FC<ImageProps> = ({ image }) => {
    return(
        <ImageWrapper>
            <img src={image} alt="Coins" />
        </ImageWrapper>
    );
}

export default Image;
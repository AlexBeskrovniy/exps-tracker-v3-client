import { Container, Flex } from "./styled/Layout.styled";
import { StyledFooter } from "./styled/Details.styled";
import { Text } from "./styled/Text.styled";
import ImageWrapper from "./styled/ImageWrapper.styled";

const Footer = () => {
    return(
        <StyledFooter>
            <Container>
                <Flex justify="space-between" align="center">
                    <Text margin="0">2023</Text>
                    <Text margin="0">Exps-Tracker v.3</Text>
                    <ImageWrapper size="2rem">
                        <svg>
                            <use href="#github"></use>
                        </svg>
                    </ImageWrapper>
                </Flex>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
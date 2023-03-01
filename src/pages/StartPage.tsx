import { Link, Navigate } from "react-router-dom";

import { useAuthContext } from "providers/AuthProvider";

import {Container, Flex } from "styled/Layout.styled";
import Button from "styled/Button.styled";
import ImageWrapper from "styled/ImageWrapper.styled";
import { Heading } from "styled/Text.styled";
import coinsImage from "../assets/coins.png";

const StartPage = () => {
    const { user } = useAuthContext();

    if (user) {
        return <Navigate to="/main" replace />
    }
    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Flex>
                    <ImageWrapper>
                        <img src={coinsImage} alt="Coins" />
                    </ImageWrapper>
                </Flex>
                <Heading>
                    Welcome to the Exps-Tracker App. Save and control your money.
                </Heading>
                <Flex width="100%" direction="column" justify="space-between" align="center">
                    <Link to="/signup">
                        <Button>Get Started</Button>
                    </Link>
                    <Link to="/signin">
                        <Button>Sign In</Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    );
}

export default StartPage;

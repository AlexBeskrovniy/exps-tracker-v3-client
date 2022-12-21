import { Link } from "react-router-dom";

import { Container, Flex } from "../components/styled/Layout.styled";
import { Heading, Text } from "../components/styled/Text.styled";
import { Form, Input } from "../components/styled/Form.styled";

const SignIn = () => {
    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Heading>Sign In</Heading>
                
                    <Form>
                        <Flex width="100%" direction="column" justify="space-between" align="center">
                            <Input type="email" name="userName" placeholder="Email" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <Input type="submit" value="Sign In" />
                        </Flex>
                    </Form>

                <Flex width="100%" padding="2rem" direction="column" justify="space-between" align="center">
                    <Text>Have not an account yet?</Text>
                    <Link to="/signup">Sign Up</Link>
                </Flex>
            </Flex>
        </Container>
    );
}

export default SignIn;

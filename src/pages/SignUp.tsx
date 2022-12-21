import { Link } from "react-router-dom";

import { Container, Flex } from "../components/styled/Layout.styled";
import { Heading, Text } from "../components/styled/Text.styled";
import { Form, Input } from "../components/styled/Form.styled";

const SignUp = () => {
    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Heading>Sign Up</Heading>
                
                    <Form>
                        <Flex width="100%" direction="column" justify="space-between" align="center">
                            <Input type="text" name="userName" placeholder="Username" required />
                            <Input type="email" name="email" placeholder="Email" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <Input type="password" name="confirm" placeholder="Confirm password" required />
                            <Input type="submit" value="Sign Up" />
                        </Flex>
                    </Form>

                <Flex width="100%" padding="2rem" direction="column" justify="space-between" align="center">
                    <Text>Already have an account?</Text>
                    <Link to="/signin">Sign In</Link>
                </Flex>
            </Flex>
        </Container>
    );
}

export default SignUp;

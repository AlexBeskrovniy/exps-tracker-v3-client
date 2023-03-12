import { Link, useNavigate } from "react-router-dom";

import useFormSubmit from "components/useFormSubmit";
import { useAuthContext } from "providers/AuthProvider";

import { Container, Flex } from "styled/Layout.styled";
import { Heading, Text } from "styled/Text.styled";
import { Form, Input } from "styled/Form.styled";

import { LOGIN_USER } from "gql-requests/mutations";
import { useMutation } from '@apollo/client';

const SignIn = () => {
    const { onLogin } = useAuthContext();
    const navigate = useNavigate();

    const [loginUser] = useMutation(LOGIN_USER, {
        onCompleted(data,) {
        console.log(data);
        onLogin(data.login);
        navigate('/main')
        },
    });

    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Heading>Sign In</Heading>
                
                    <Form onSubmit={(e) => useFormSubmit(e, loginUser)}>
                        <Flex width="100%" direction="column" justify="space-between" align="center">
                            <Input type="email" name="email" placeholder="Email" required />
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

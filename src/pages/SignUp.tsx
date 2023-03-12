import { Link, useNavigate } from "react-router-dom";

import useFormSubmit from "components/useFormSubmit";
import { useAuthContext } from "providers/AuthProvider";

import { Container, Flex } from "styled/Layout.styled";
import { Heading, Text } from "styled/Text.styled";
import { Form, Input } from "styled/Form.styled";

import { ADD_USER } from "../gql-requests/mutations";
import { useMutation } from '@apollo/client';

const SignUp = () => {
    const context: any = useAuthContext();
    const navigate = useNavigate();
    const [addUser] = useMutation(ADD_USER, {
        onCompleted(data) {
            context.onLogin(data.register);
            navigate('/main')
        }
    });

    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Heading>Sign Up</Heading>
                
                    <Form onSubmit={(e) => useFormSubmit(e, addUser)}>
                        <Flex width="100%" direction="column" justify="space-between" align="center">
                            <Input type="text" name="name" placeholder="Username" required />
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

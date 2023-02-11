import { Link } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { Container, Flex } from "../components/styled/Layout.styled";
import { Heading, Text } from "../components/styled/Text.styled";
import { Form, Input } from "../components/styled/Form.styled";

const LOGIN_USER = gql`
  mutation login($input: LoginUserInput) {
    login(input: $input) {
        id
        name
        email
        token
    }
  }
`;

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
                
                    <Form 
                        onSubmit={ (e: any) => {
                            e.preventDefault();
                            const formData = new FormData(e.target)
                            const { email, password } = Object.fromEntries(formData);
                            loginUser({ variables: {
                                input: {
                                    email: email,
                                    password: password
                                }
                        } });
                    } }>
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

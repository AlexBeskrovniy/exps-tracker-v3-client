import { Container, Flex } from "../components/styled/Layout.styled";
import { Form, Input } from "../components/styled/Form.styled";

import { gql, useMutation } from '@apollo/client';

const ADD_CATEGORY = gql`
    mutation createCategory($input: CategoryInput) {
        createCategory(input: $input) {
            id
            name
            description
        }
    }
`

const CategoryForm = () => {
    const [addCategory, {data}] = useMutation(ADD_CATEGORY);
    if(data) console.log(data);
    return(
        <Container>
            <Flex height="100%" direction="column" justify="center" align="center">
                <Form onSubmit={ (e: any) => {
                            e.preventDefault();
                            const formData = new FormData(e.target)
                            const { name, description } = Object.fromEntries(formData);
                            addCategory({ variables: {
                                input: {
                                    name: name,
                                    description: description
                                }
                            } });
                        } }>
                    <Flex width="100%" direction="column" justify="space-between" align="center">
                        <Input marginBottom="1rem" type="text" name="name" placeholder="Name" required />
                        <Input marginBottom="1rem" type="text" name="description" placeholder="Description" />
                        <Input type="submit" value="Submit" />
                    </Flex>
                </Form>
            </Flex>
        </Container>
    );
}

export default CategoryForm;